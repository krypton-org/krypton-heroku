import express from 'express';
import { GraphQLAuthService } from 'graphql-auth-service';

const app = express();

const config = {
    dbConfig: {
        address: process.env.MONGODB_URI
    }
}

app.use(GraphQLAuthService( config ));
app.listen(process.env.PORT || 5000, () => { console.log("Listening on port " + process.env.PORT || 5000) });