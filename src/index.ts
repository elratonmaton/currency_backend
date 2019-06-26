import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from './routes/index';

const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    app.use("/", routes);

    // ...

    // start express server
    app.listen(3002, () => {
        console.log("Server started on port 3002");
});
