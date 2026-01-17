# Требования к бэкенду: Вынос `has_products` в отдельную таблицу

## Цель
Вынести поле `has_products` из таблицы категорий в отдельную таблицу для категорий маркетплейса, сохранив совместимость с фронтендом.

## Текущая ситуация на фронте

### API эндпоинты, которые используют `only_with_products`:

1. **GET `/api/v1/mp/categories/`**
   - Параметры: `limit`, `offset`, `only_with_products` (boolean)
   - Используется в: `src/shared/api/categories.ts` → `fetchCategories()`

2. **GET `/api/v1/mp/categories/tree/`**
   - Параметры: `only_with_products` (boolean)
   - Используется в: `src/shared/api/categories.ts` → `fetchCategoryTree()`

### Где используется на фронте:

- **Для пользователей** (скрывает пустые категории):
  - `src/feature/category/ui/category-menu.tsx` → `useCategoryTree(true)`
  - `src/widgets/categories/index.tsx` → `useCategoryTree(true)`
  - `src/app/(routes)/categories/page.tsx` → `useCategoryTree(true)`
  - `src/feature/navigation/ui/mobile-sheet.tsx` → `useCategoryTree(true)`

- **Для админки** (показывает все категории):
  - `src/app/(routes)/admin/page.tsx` → `useCategoryTree()` (без параметра)

## Требования к бэкенду

### 1. Структура новой таблицы

Предлагаемая структура таблицы `marketplace_category_products`:

```sql
CREATE TABLE marketplace_category_products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES categories(id),
    has_products BOOLEAN NOT NULL DEFAULT false,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(category_id)
);
```

### 2. API должен продолжать работать

**КРИТИЧЕСКИ ВАЖНО:** Все существующие API эндпоинты должны продолжать работать БЕЗ ИЗМЕНЕНИЙ:

#### GET `/api/v1/mp/categories/`
- **Параметры:** `limit`, `offset`, `only_with_products` (boolean, опциональный)
- **Поведение:**
  - Если `only_with_products=true` → возвращать только категории, где `has_products=true` (из новой таблицы)
  - Если `only_with_products=false` или не указан → возвращать все категории
- **Ответ:** Должен включать поле `has_products` в каждой категории:
```json
{
  "result": [
    {
      "id": 1,
      "name": "Категория",
      "has_products": true,  // ← Должно быть в ответе
      ...
    }
  ]
}
```

#### GET `/api/v1/mp/categories/tree/`
- **Параметры:** `only_with_products` (boolean, опциональный)
- **Поведение:**
  - Если `only_with_products=true` → возвращать только категории с товарами (рекурсивно фильтровать дерево)
  - Если `only_with_products=false` или не указан → возвращать полное дерево
- **Ответ:** Должен включать поле `has_products` в каждой категории и её дочерних элементах

#### GET `/api/v1/mp/categories/{id}/`
- **Ответ:** Должен включать поле `has_products` в ответе

### 3. Логика обновления `has_products`

- При создании/изменении товара → автоматически обновлять `has_products` в таблице `marketplace_category_products`
- При удалении товара → проверять, остались ли товары в категории, и обновлять `has_products`
- Скрипт для первоначального заполнения → можно оставить для ручного запуска или добавить в деплой после миграций

### 4. Миграция данных

1. Создать новую таблицу `marketplace_category_products`
2. Заполнить данными из текущей структуры (если `has_products` уже есть в таблице категорий)
3. Запустить скрипт для первоначального заполнения на основе реальных товаров
4. Убедиться, что все API эндпоинты продолжают возвращать `has_products` в ответе

## Проверка совместимости

После изменений на бэкенде нужно проверить:

1. ✅ GET `/api/v1/mp/categories/?only_with_products=true` → возвращает только категории с товарами
2. ✅ GET `/api/v1/mp/categories/tree/?only_with_products=true` → возвращает дерево только с категориями, где есть товары
3. ✅ GET `/api/v1/mp/categories/tree/` (без параметра) → возвращает полное дерево
4. ✅ В ответе каждой категории есть поле `has_products: boolean`

## Важно для фронта

- Фронт **НЕ ТРЕБУЕТ ИЗМЕНЕНИЙ**, если бэкенд:
  - Продолжает поддерживать параметр `only_with_products` в API
  - Продолжает возвращать поле `has_products` в ответе категорий
  - Корректно фильтрует категории по параметру `only_with_products`

## Контакты

Если возникнут вопросы по фронтенду, обращайтесь к разработчику фронтенда.
