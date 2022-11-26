import { useState } from "react";
import style from "../stylecomponents/Tasks.module.css";
export default function Tasks() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Очередь",
      items: [
        { id: 1, name: "Кот" },
        { id: 2, name: "Мышь" },
        { id: 3, name: "Пчела" },
      ],
    },
    {
      id: 2,
      title: "Разработка",
      items: [
        { id: 4, name: "Крот" },
        { id: 5, name: "Нос" },
        { id: 6, name: "Пила" },
      ],
    },
    {
      id: 3,
      title: "Готово",
      items: [
        { id: 7, name: "Эль" },
        { id: 8, name: "Цепь" },
        { id: 9, name: "Фонарь" },
      ],
    },
  ]);

  const [dragItem, setDragItem] = useState();

  function dragStart(e, id) {
    setDragItem(id);
  }
  function dragStop() {
    console.log(dragItem);
  }
  return (
    <div className={style.main}>
      {boards.map((board) => {
        return (
          <div key={board.id} className={style.board}>
            <div className={style.boardTitle}>{board.title}</div>
            {board.items.map((item) => {
              return (
                <div
                  key={item.id}
                  onDragStart={(e) => dragStart(e, item.id)}
                  onDragEnd={dragStop}
                  onDragOver={() => {}}
                  draggable={true}
                  className={style.boardItems}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
