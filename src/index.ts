import express from 'express';
import { GraphQLAuthService } from 'graphql-auth-service';

const app = express();

app.use(GraphQLAuthService({ dbAddress: process.env.MONGODB_URI as string }));
app.listen(process.env.PORT || 5000, () => { console.log("Listening on port " + process.env.PORT || 5000) });