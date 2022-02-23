import { Subjects } from "./Subjects";

export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    title: string;
    price: number;
    image: string;
    colors?: string;
    sizes?: string;
    brand?: string;
    category: string;
    material?: string;
    description: string;
    numReviews: number;
    rating: number;
    countInStock: number;
  };
}
