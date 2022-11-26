import { useState } from "react";
import style from "../stylecomponents/Projects.module.css";
import mainData from "../data/data";
import CardProject from "./CardProject";
export default function Projects() {
  const [projects, setProjects] = useState(mainData);

  function addProject() {
    setProjects((old) => [
      ...old,
      {
        name: "Имя проекта",
        id: old.length + 1,
        editable: false,
        tasks: [],
      },
    ]);
  }

  function editProjectStatus(id) {
    setProjects((old) =>
      old.map((x) => (x.id === id ? { ...x, editable: !x.editable } : x))
    );
  }
  function editName(id, newName) {
    setProjects((old) =>
      old.map((x) =>
        x.id === id ? { ...x, name: newName, editable: !x.editable } : x
      )
    );
  }

  return (
    <div className={style.main}>
      <div>
        <h1 className={style.projectsHeader}>Проекты</h1>
        {/* <div>
                <h2>Поиск</h2>
                <input></input>
            </div> */}
      </div>
      <div>
        {projects.map((data) => (
          <CardProject
            name={data.name}
            id={data.id}
            key={data.id}
            editable={data.editable}
            editStatus={editProjectStatus}
            editName={editName}
          />
        ))}
      </div>
      <div className={style.divAdd}>
        <button className={style.addbutton} onClick={addProject}>
          добавить
        </button>
      </div>
    </div>
  );
}
