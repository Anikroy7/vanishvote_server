import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function main() {
  try {
     await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
