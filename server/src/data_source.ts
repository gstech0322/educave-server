import { DataSource } from "typeorm";

import User from "./schema/users/user";


export const sqlDataSource = new DataSource({
       type: 'mariadb',
       host: "localhost",
       port: 3306,
       username: "educave",
       password: "educave",
       database: "educave",
       logging: false,
       synchronize: true,
       entities: [User]
});
