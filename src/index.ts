import startDb from "./config/database";
import startServer from "./config/server";

async function main() {
  await startDb();
  await startServer();
}

main().catch((error) => console.error("Error while running the app", error));
