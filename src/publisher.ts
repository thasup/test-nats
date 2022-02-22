import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("microservices-ecommerce", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: "$20",
  });

  stan.publish("TicketCreated", data, () => {
    console.log("Event published");
  });
});
