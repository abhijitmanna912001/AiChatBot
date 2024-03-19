import { connect, disconnect } from "mongoose";

async function connectionDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to mongodb");
  }
}

async function disConnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't disconnect from mongodb");
  }
}

export { connectionDatabase, disConnectFromDatabase };
