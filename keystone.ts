import "dotenv/config";
import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { session, withAuth } from "./auth";
const DATABASE_URL =
  process.env.DATABASE_URL ||
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRESS_PORT}/${process.env.POSTGRESS_DB_NAME}`;

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export default withAuth(
  config({
    db: { provider: "postgresql", url: DATABASE_URL },
    server: {
      port: PORT,
      //   cors: {
      //     origin: process.env.FRONTEND_URL,
      //     credentials: true,
      //   },
    },
    ui: {
      // TODO: change this for roles
      isAccessAllowed: (context) => !!context.session?.data,
    },
    graphql: {
      playground: true,
    },
    session,
    lists,
  })
);
