import { GraphQLString } from "graphql";

import userRepository from "../users/repository";
import { passwordValid } from "./helpers";
import { AuthUserType } from "./types";

const LOGIN = {
    type: AuthUserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_: any, args: any, req: any) {
        const user = await userRepository.findOneBy({ email: args.email });
        if (!user)
            throw new Error('Account not found');

        if (!passwordValid(user.password, args.password))
            throw new Error('Incorrect password');

        req.session.user = user;
        await req.session.save();

        return { user: user, token: req.sessionID };
    }
}


const queries = {
    login: LOGIN
};

export default queries;