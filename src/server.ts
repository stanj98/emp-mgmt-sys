import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";

dotenv.config();

const {ATLAST_URI} = process.env;

if (!ATLAST_URI) {
    console.error(
        "No ATLAS_URI environment variable has been defined in config.env"
    );
    process.exit();
}

connectToDatabase(ATLAST_URI)
    .then(() => {
        const app = express();
        app.use(cors());

        app.listen(5200, () => {
            console.log(`Server running at http://localhost:5200...`);
        });
    })
    .catch((error) => console.error(error));

