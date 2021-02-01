import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "../users/types";

export const AuthUserType = new GraphQLObjectType({
    name: 'AuthUser',
    fields: {
        user: { type: UserType },
        token: { type: GraphQLString }
    }
});

export const RegisterInputType = new GraphQLInputObjectType({
    name: 'RegisterInput',
    fields: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});