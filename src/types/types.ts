export interface User {
  image: string;
}

export interface PropsNavigationComponent {
  dataUser?: User;
}
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Cart {
  id: number;

  title: string;
  price: number;

  count: number;
  images: string[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  sku: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;
  availabilityStatus: string;

  tags: string[];
  thumbnail: string;
  images: string[];

  weight: number;
  dimensions: Dimensions;

  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;

  reviews: Review[];
  meta: Meta;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
