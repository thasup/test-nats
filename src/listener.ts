import nats from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect(
  "microservices-ecommerce",
  randomBytes(4).toString("hex"),
  {
    url: "http://localhost:4222",
  }
);

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  const subscription = stan.subscribe("TicketCreated");

  subscription.on("message", (msg) => {
    console.log("Message recieved!");
  });
});
