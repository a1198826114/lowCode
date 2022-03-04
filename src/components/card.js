import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import * as ItemTypes from "./ItemTypes";
const style = {
  backgroundColor: "red",
  margin: "5px",
  padding: "5px",
  cursor: "move",
};
export default function Card({ text, index, moveCard }) {
 let[,drop]=  useDrop({
    accept: ItemTypes.CARD,
    collect: () => {},
    hover( item, monitor ) {
      const dragIndex = item.index;
      const hoverIndex = index;
    //   console.log(dragIndex,hoverIndex,675)
      if (dragIndex == hoverIndex) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const haltOfHoverHeight = (bottom - top) / 2;
      const { y } = monitor.getClientOffset();
      const hoverClientY = y - top;
     
      if (
        (dragIndex < hoverIndex && hoverClientY > haltOfHoverHeight) ||
        (dragIndex > hoverIndex && hoverClientY < haltOfHoverHeight)
      ) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });
  const ref = useRef();
  let [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD, //这个用来表示拖动的品种是卡片
    item: () => ({  index }), //这个用来区分具体拖动的是哪张卡片
    collect: (monitor) => ({
      //这个返回的对象就是这个钩子函数的返回值
      isDragging: monitor.isDragging(),
    }),
    end:(item,monitor)=>{
        const dropResult = monitor.getDropResult();
        console.log(item,dropResult,7676)
    }
  });
  const opacity = isDragging ? 0.1 : 1;
  drag(ref);
  drop(ref)
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
}
