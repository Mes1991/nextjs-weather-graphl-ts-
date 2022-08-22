import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "graphql/schema";
import { resolvers } from "graphql/resolvers";
import Cors from 'micro-cors';

// ts types
// import type { NextApiRequest, NextApiResponse } from 'next'

import { NODE_ENV } from '@/utils/env.api';

const cors = Cors();

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: (NODE_ENV === 'development') ? [ApolloServerPluginLandingPageGraphQLPlayground()] : [],
    context: ({ req }) => {{
        return {
            test: "gg"
        }
    }}
});

const startServer = apolloServer.start();

export default cors(async function (req: any, res: any) {
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql'
    })(req, res)
}) 

export const config = {
    api: {
        bodyParser: false
    }
}
