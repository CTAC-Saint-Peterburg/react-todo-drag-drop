import style from "../stylecomponents/CardDnd.module.css";
export default function CardDnd(props) {
  return (
    <>
      <div>
        <h1 className={style.title}>{props.title}</h1>
        <div className={style.description}>
          <h3>Описание:</h3>
          <p>Вам предстоит сделать очень многое, чтобы достигнуть результата</p>
        </div>
        <div className={style.data}>
          <p>27.11.2022</p>
          <p>11ч 35мин</p>
          <p>02.12.2022</p>
        </div>
        <div className={style.priority}>high</div>
        <div className={style.subTask}>
          <h3>Дополнительные задачи:</h3>
          <ul>
            <li>тест</li>
            <li>тест</li>
            <li>тест</li>
          </ul>
        </div>
      </div>
    </>
  );
}
