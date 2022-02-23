import nats from "node-nats-streaming";
import { ProductCreatedPublisher } from "./events/ProductCreatedPublisher";

console.clear();

const stan = nats.connect("microservices-ecommerce", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new ProductCreatedPublisher(stan);
  publisher.publish({
    id: "123",
    title: "Sample Dress",
    price: 1990,
    image: "./asset/sample.jpg",
    colors: "White,Black",
    sizes: "S,M,L",
    brand: "Uniqlo",
    category: "Dress",
    material: "Polyester 100%",
    description:
      "Turpis nunc eget lorem dolor. Augue neque gravida in fermentum et. Blandit libero volutpat sed cras ornare arcu dui vivamus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris.",
    numReviews: 0,
    rating: 5,
    countInStock: 12,
  });

  // const data = JSON.stringify({
  //   id: "123",
  //   title: "concert",
  //   price: "$20",
  // });

  // stan.publish("TicketCreated", data, () => {
  //   console.log("Event published");
  // });
});
