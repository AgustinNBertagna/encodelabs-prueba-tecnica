import { connect } from "mongoose";
import { DB_URI } from "./envs";

export default async function startDb() {
  await connect(DB_URI);
  console.log(`Database connection stablished`);
}
