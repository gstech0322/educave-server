import express from "express";
import { graphqlHTTP } from "express-graphql";
import session from 'express-session';

import { sqlDataSource } from "./data_source";
import schema from "./schema";
import sessionOptions from "./session";

const main = async () => {
    sqlDataSource.initialize().then(() => {
        const app = express();

        app.use(session(sessionOptions))

        app.use("/gql",
            graphqlHTTP({
                schema: schema,
                graphiql: {
                    headerEditorEnabled: true
                },
            }));

        app.listen(3002, () => {
            console.log("SERVER RUNNING ON PORT 3001");
        });
    });
};


main().catch((err) => {
    console.log(err);
})