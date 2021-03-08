import { createServer } from "miragejs";

export default function mockServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/list", () => [1, 2, 3]);
    },
  });
}
