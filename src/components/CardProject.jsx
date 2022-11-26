import style from "../stylecomponents/CardProject.module.css";
export default function CardProject(props) {
  return (
    <div className={style.projects} key={props.id}>
      <input type="checkBox" style={{ width: 30, height: 30 }}></input>
      {!props.editable ? (
        <h2 className={style.h1}>{props.name}</h2>
      ) : (
        <input
          placeholder={props.name}
          onBlur={(e) => props.editName(props.id, e.target.value)}
        ></input>
      )}
      <button
        className={style.editbutton}
        onClick={() => props.editStatus(props.id)}
      >
        переименовать
      </button>
    </div>
  );
}
