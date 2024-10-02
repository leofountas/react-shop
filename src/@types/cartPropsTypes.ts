export interface CartItem {
  name: string;
  price: number;
  amount: number;
}

export interface cartProps {
  cart: CartItem[];
  updateCart: (value: CartItem[]) => void;
}
