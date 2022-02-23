import { Message } from "node-nats-streaming";
import { Listener } from "./Listener";
import { ProductCreatedEvent } from "./ProductCreatedEvent";
import { Subjects } from "./Subjects";

export class ProductCreatedListener extends Listener<ProductCreatedEvent> {
  readonly subject: Subjects.ProductCreated = Subjects.ProductCreated;
  queueGroupName = "payment-service";
  onMessage(data: ProductCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);

    msg.ack();
  }
}
