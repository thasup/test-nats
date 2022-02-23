import { Message } from "node-nats-streaming";
import { Listener } from "./Listener";

export class ProductCreatedListener extends Listener {
  subject = "product:created";
  queueGroupName = "payment-service";
  onMessage(data: any, msg: Message) {
    console.log("Event data!", data);

    msg.ack();
  }
}
