import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { resolvers } from '../data/resolver.js';
import { typeDefs } from '../data/schema.graphql';
import http from "http";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const startApolloServer = async(app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}


app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: 8080 }, () => {
    console.log(`Server is running at http://localhost:8080`);
});

startApolloServer(app, httpServer);

export default httpServer;


