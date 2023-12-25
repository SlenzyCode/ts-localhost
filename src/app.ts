import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000);