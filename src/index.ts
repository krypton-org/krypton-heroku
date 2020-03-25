import express from 'express';
import kryptonAuth from '@krypton-org/krypton-auth';
const app = express();

app.use(kryptonAuth({ dbAddress: process.env.MONGODB_URI as string }));
app.listen(process.env.PORT || 5000, () => { console.log("Listening on port " + process.env.PORT || 5000) });