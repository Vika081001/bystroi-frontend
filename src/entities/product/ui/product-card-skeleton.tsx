import { Skeleton } from "@/shared/ui/kit/skeleton";

export const ProductCardSkeleton = () => {
  return (
    // 1. Добавляем w-full и копируем остальные классы с ProductCard
    <div className="relative w-full overflow-hidden h-72 rounded-lg border border-gray-100 shadow-sm flex items-end">
      {/* Скелетон для фона (картинки) */}
      <Skeleton className="absolute inset-0 w-full h-full rounded-none" />

      {/* Градиент, как в настоящей карточке */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* 2. Контейнер для контента, также соответствует ProductCard */}
      <div className="flex flex-col gap-3 p-3 relative z-10 mt-auto flex-1 w-full">
        <div className="space-y-2">
          {/* Название */}
          <Skeleton className="h-5 w-3/4 bg-white/20" />
          {/* Категория */}
          <Skeleton className="h-3 w-1/2 bg-white/20" />
          {/* Цена */}
          <Skeleton className="h-5 w-1/4 bg-white/20" />
        </div>

        {/* Кнопка */}
        <Skeleton className="h-10 w-full rounded-md bg-white/20" />
      </div>
    </div>
  );
};
