import { sqlDataSource } from "../../data_source";
import User from "./user";

const userRepository = sqlDataSource.getRepository(User).extend({

});

export default userRepository;