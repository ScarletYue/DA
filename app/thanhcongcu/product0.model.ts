// product.model.ts
export interface Product {
    name: string;
    category: string;
    size: string;
    color: string;
    price: number;
    discountPrice?: number;
    imageUrl: string;
  }
  