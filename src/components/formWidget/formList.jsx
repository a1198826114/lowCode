import { useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
export default function FormList({ item }) {
  const ref = useRef();
  //   let[,drop]=  useDrop({
  //     accept: 'form',
  //     collect: () => {},
  //     hover( list, monitor ) {
  //       const dragIndex = list.props.index;
  //       const hoverIndex = item.props.index;
  //       console.log(dragIndex,hoverIndex,675)
  //       if (dragIndex == hoverIndex) return;
  //       const { top, bottom } = ref.current.getBoundingClientRect();
  //       const haltOfHoverHeight = (bottom - top) / 2;
  //       const { y } = monitor.getClientOffset();
  //       const hoverClientY = y - top;

  //     //   if (
  //     //     (dragIndex < hoverIndex && hoverClientY > haltOfHoverHeight) ||
  //     //     (dragIndex > hoverIndex && hoverClientY < haltOfHoverHeight)
  //     //   ) {
  //     //     moveCard(dragIndex, hoverIndex);
  //     //     item.index = hoverIndex;
  //     //   }
  //     },
  //   });
  //   let [{ isDragging }, drag] = useDrag({
  //     type: "form", //这个用来表示拖动的品种是表单
  //     item: () => ({ index: item.props.index }), //这个用来区分具体拖动的是哪个表单
  //     collect: (monitor) => ({
  //       //这个返回的对象就是这个钩子函数的返回值
  //       isDragging: monitor.isDragging(),
  //     }),
  //     end:(item, monitor)=>{
  //         console.log(3333,monitor.getDropResult())
  //     }
  //   });
  //   drag(ref);
  //   drop(ref)

//   let [{ isDragging }, drag] = useDrag({
//     type: "form", //这个用来表示拖动的品种是表单
//     item: () => ({ index: item.props.index }), //这个用来区分具体拖动的是哪个表单
//     // collect: (monitor) => ({
//     //   //这个返回的对象就是这个钩子函数的返回值
//     //   isDragging: monitor.isDragging(),
//     // }),
//     // end: (item, monitor) => {
//     //   console.log(3333, monitor.getDropResult());
//     // },
//   });
//   drag(ref);
  console.log(item.props.index, 8768);
  return <h1 ref={ref}>{item}</h1>;
  // console.log(props,88)
  // return <div >222</div>;
}
