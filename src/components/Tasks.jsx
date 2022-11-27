import { useState } from "react";
import DragNdrop from "./DragNdrop";
import style from "../stylecomponents/Tasks.module.css";
export default function Tasks() {
  const [data, setData] = useState([
    {
      title: "очередь",
      items: [
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
      ],
    },
    {
      title: "в процессе",
      items: [
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
      ],
    },
    {
      title: "готово",
      items: [
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
        `Project name:${Math.floor(Math.random() * 9999)}`,
      ],
    },
  ]);

  return (
    <div className={style.dragNdropMain}>
      <DragNdrop data={data} />
    </div>
  );
}
