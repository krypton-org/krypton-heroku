import express from 'express';
import { GraphQLAuthService } from 'graphql-auth-service';

const app = express();

app.use(GraphQLAuthService());
app.listen(process.env.PORT || 80, () => {console.log("Listening on port " + process.env.PORT || 80)});