import { Publisher } from "./Publisher";
import { ProductCreatedEvent } from "./ProductCreatedEvent";
import { Subjects } from "./Subjects";

export class ProductCreatedPublisher extends Publisher<ProductCreatedEvent> {
  subject: Subjects.ProductCreated = Subjects.ProductCreated;
}
