import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PORT } from "./envs";
import typeDefs from "../api/typeDefs";
import resolvers from "../api/resolvers";

export default async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT || 4000 },
  });
  console.log(`Server running at: ${url}`);
}
