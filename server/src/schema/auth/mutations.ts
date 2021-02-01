import userRepository from "../users/repository";
import { AuthUserType, RegisterInputType } from "./types";

const REGISTER = {
    type: AuthUserType,
    args: {
        data: { type: RegisterInputType }
    },
    async resolve(_: any, args: any, req: any) {
        const userData = args.data;

        const userExists = await userRepository.findBy({ email: userData.email }).then((users) => users.length > 0);
        if (userExists)
            throw new Error('Email address already in use');

        const user = userRepository.create(userData);
        await userRepository.insert(user);

        req.session.user = user;
        await req.session.save();

        return { user: user, token: req.sessionID };
    }
}

const mutations = {
    register: REGISTER,
};

export default mutations;