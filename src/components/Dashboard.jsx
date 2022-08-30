import { getAlltasks } from "../helpers/tasks/getAllTasks";
import { useState, useEffect } from "react";

import PocketBase from "pocketbase";
import ServerDB from "../helpers/DB";

const Dashboard = () => {
  // const client = new PocketBase(ServerDB);
  // client.realtime.subscribe("tareas", function (e) {
  //   console.log(e.record);
  // });
  useEffect(() => {
    try {
      getAlltasks();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [data, setData] = useState({});

  return (
    <>
      <div>Vista del Dashboard</div>
    </>
  );
};

export default Dashboard;
