import PocketBase from "pocketbase";
import ServerDB from "../DB";

export const getAlltasks = async () => {
  try {
    const client = new PocketBase(ServerDB);
    const records = await client.records.getFullList(
      "tareas",
       900000000000,
      {
        sort: "fecha",
      }
    );
    console.log(records);
  } catch (error) {
    console.log(error);
  }
};
