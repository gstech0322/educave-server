import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { authMutations, authQueries } from "./auth";

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...authQueries,
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...authMutations,
    }
});

const schema = new GraphQLSchema({
    query,
    mutation,
});

export default schema;