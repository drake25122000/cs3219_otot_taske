import express from 'express';
import cors from 'cors';
import { getModules } from './module-controller.js';

export const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // config cors so that front-end can use
app.options('*', cors())


const router = express.Router();

// Controller will contain all the User-defined Routes
app.get("/", (req, res) => res.send("Get modules from Azure!!"));

router.get("/getmodules/:ay", getModules);

app.use("/api/modules", router).all((_, res) => {
    res.setHeader("content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
});


app.listen(PORT, () => console.log('CS3219_OTOT_TASKB1 listening on port 8000'));

export default app;
