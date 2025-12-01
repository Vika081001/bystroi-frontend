export type OrderGood = {
  nomenclature_id: number;
  warehouse_id?: number;
  quantity?: number;
  is_from_cart?: boolean;
};

export type Cart = {
  contragent_phone: string;
  goods: OrderGood[];
  total_count: string;
};

export interface GetCartDto {
  contragent_phone: string;
}

export interface RemoveFromCartDto {
  contragent_phone: string;
  nomenclature_id: number;
  warehouse_id?: number;
}

export interface AddToCartDto {
  contragent_phone: string;
  good: OrderGood;
}
