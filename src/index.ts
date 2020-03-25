import express from 'express';
import KryptonAuth from '@krypton-org/krypton-auth';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: function(origin, callback){
        return callback(null, true);
    },
    credentials: true,
}));

app.use(KryptonAuth({ dbAddress: process.env.MONGODB_URI as string }));
app.listen(process.env.PORT || 5000, () => { console.log("Listening on port " + process.env.PORT || 5000) });
