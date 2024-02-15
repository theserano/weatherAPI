import express from "express";
import dotenv from "dotenv"
import weatherRoutes from "./src/routes/weatherRoutes";


dotenv.config()
const app = express();
const PORT = process.env.PORT || 7000

app.use(express.json())


app.use("/api/weather", weatherRoutes)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})