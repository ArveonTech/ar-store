export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  ip: string;
  macAddress: string;
  university: string;
  role: string;
  ssn: string;
  ein: string;
  userAgent: string;

  address: Address;
  bank: Bank;
  company: Company;
  crypto: Crypto;
  hair: Hair;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface Hair {
  color: string;
  type: string;
}

export interface PropsNavigationComponent {
  dataUser?: { image: string };
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
