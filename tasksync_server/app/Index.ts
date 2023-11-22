import express, { type Express, type Response, type Request } from "express";
const port: number = 4000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("This is hello from task sync server");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
