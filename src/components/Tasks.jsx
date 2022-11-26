import { useState } from "react";
import DragNdrop from "./DragNdrop";
import style from "../stylecomponents/Tasks.module.css";
export default function Tasks() {
  const [data, setData] = useState([
    { title: "очередь", items: ["1", "2", "3"] },
    { title: "в процессе", items: ["4", "5", "6"] },
    { title: "готово", items: ["7", "8", "9"] },
  ]);

  return (
    <div className={style.dragNdropMain}>
      <DragNdrop data={data} />
    </div>
  );
}
