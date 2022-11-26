import style from "../stylecomponents/Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerdiv}>
        <Link to="/" className={style.link}>
          <button className={style.button}>выбор проекта</button>
        </Link>

        <Link to="/tasks" className={style.link}>
          <button className={style.button}>задачи</button>
        </Link>
      </div>
    </header>
  );
}
