import { useState, useRef } from "react";
import style from "../stylecomponents/Tasks.module.css";
export default function DragNdrop(props) {
  const [list, setList] = useState(props.data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log(e, params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setDragging(true);
  };
  const handleDragEnd = () => {
    console.log("eding drag");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };
  const handleDragEnter = (e, params) => {
    console.log("entering...", params);
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      console.log("test");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };
  const changeStyle = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return `${style.dndItem} ${style.current}`;
    }
    return `${style.dndItem}`;
  };
  return (
    <div className={style.dragNdrop}>
      {list.map((grp, grpI) => (
        <div
          key={grp.title}
          className={style.dndGroup}
          onDragEnter={
            dragging && !grp.items.length
              ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
              : null
          }
        >
          <div className={style.dndGroupTitle}>{grp.title}</div>
          {grp.items.map((item, itemI) => (
            <div
              draggable={true}
              onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
              onDragEnter={
                dragging ? (e) => handleDragEnter(e, { grpI, itemI }) : null
              }
              key={item}
              className={
                dragging ? changeStyle({ grpI, itemI }) : `${style.dndItem}`
              }
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
