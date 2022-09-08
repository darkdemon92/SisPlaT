import PocketBase from "pocketbase";
import ServerDB from "../DB";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TaskList, modifyTaskList } from "../../redux/features/taskSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import "../../helpers/tasks/Cards.css";

export const allTasks = async () => {
  try {
    const client = new PocketBase(ServerDB);
    const records = await client.records.getFullList("tareas", 900000000000, {
      sort: "fecha",
    });
    //console.log(records);
    return records;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const GetTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  //console.log(tasks);
  const { userdata } = useSelector((state) => state.loginData);
  const { profile } = userdata;
  //console.log(profile.id);
  const dispatch = useDispatch();
  const client = new PocketBase(ServerDB);

  
  client.realtime.subscribe("tareas", function (e) {
    const actions = e.action;
    const records = e.record;
    //console.log(action);
    //console.log(record);
    dispatch(modifyTaskList({actions, records}));
  });
  
  useEffect(() => {
    async function Tasks() {
      const getAllTasks = await allTasks();
      dispatch(TaskList(getAllTasks));
    }
    Tasks();
  }, []);

  return (
    <div className="card-grid">
      {tasks.map((task, i) => {
        //console.log(task);
        const { tarea, fecha, lugar, responsable, estado } = task;
        return (
          <Card
            className="card"
            variant="outlined"
            sx={{ maxWidth: 450 }}
            key={i}
          >
            <CardContent>
              Tarea: {tarea} <br />
              Fecha: {fecha} <br />
              Lugar: {lugar} <br />
              Responsable: {responsable} <br />
              Estado: {estado}
            </CardContent>
            <CardActions>Action</CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default GetTasks;
