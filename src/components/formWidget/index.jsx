import "./index.less";
import { Input, Form } from "antd";
import { useState } from "react";
import FormList from "./formList";
import { nanoid } from "nanoid";
import { DeleteOutlined } from "@ant-design/icons";
let id;
let oldNode;
function FormWidget() {
  const drop = (ev) => {
    ev.preventDefault();
    var type = ev.dataTransfer.getData("type");
    // var id = ev.dataTransfer.getData("id");
    let node = ev.target;
    if (type) {
      let index;
      let position = 0;
      //   let oldclassName = node.className;
      if (node.className !== "formWidgetContext") {
        while (node.className !== "ant-form ant-form-horizontal") {
          if (node.getAttribute("index") !== null) {
            index = node.getAttribute("index");
            let positionHover;
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].props.index == index) {
                positionHover = i;
                break;
              }
            }
            const { top, bottom } = node.getBoundingClientRect();

            const haltOfHoverHeight = (bottom - top) / 2;
            const y = ev.clientY;
            if (y > top + haltOfHoverHeight) {
              let res = addNode(arr, type, positionHover + 1);
 
              setArr([...res]);
            } else {
              let res = addNode(arr, type, positionHover);
              setArr([...res]);
            }
          }
          node = node.parentNode;
        }
      } else {
        setArr(() => {
          let res = addNode(arr, type, arr.length);
          return [...res];
        });
      }

      //   if (oldclassName == "ant-form-item-container") {
      //     setArr(() => {
      //       let res = addNode(arr, type, position + 1);
      //       return [...res];
      //     });
      //   } else if (oldclassName == "formWidgetContext") {
      //     setArr(() => {
      //       let res = addNode(arr, type, arr.length);
      //       return [...res];
      //     });
      //   } else {
      //     setArr(() => {
      //       let res = addNode(arr, type, position);
      //       return [...res];
      //     });
      //   }
    }
  };
  const dragOver = (e) => {
    e.preventDefault();

    let node = e.target;

    if (node.className !== "formWidgetContext") {
      while (node.className !== "ant-form ant-form-horizontal") {
        if (node.getAttribute("index") !== null) {
          let index = node.getAttribute("index");
          if (index == id) return;
          let positionHover;
          let positionDrag;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].props.index == index) {
              positionHover = i;
              continue;
            }
            if (arr[i].props.index == id) {
              positionDrag = i;
              continue;
            }
          }
          const { top, bottom } = node.getBoundingClientRect();

          const haltOfHoverHeight = (bottom - top - 24) / 2;
          const y = e.clientY;
          const hoverClientY = y - top;

          if (
            (positionDrag < positionHover &&
              hoverClientY > haltOfHoverHeight) ||
            (positionDrag > positionHover && hoverClientY < haltOfHoverHeight)
          ) {
            const res = arr.splice(positionDrag, 1);
            arr.splice(positionHover, 0, res[0]);
            setArr([...arr]);
          }
        }
        node = node.parentNode;
      }
    } else {
      let positionDrag;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].props.index == id) {
          positionDrag = i;
          const res = arr.splice(positionDrag, 1);
          arr.push(res[0]);
          setArr([...arr]);
          break;
        }
      }
    }
  };
  const addNode = (arr, type, index) => {
    let id = nanoid();
    if (type == "input") {
      arr.splice(
        index,
        0,
        <div
          className="ant-form-item-container"
          type="input"
          key={id}
          index={id}
          draggable
        >
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <DeleteOutlined />
        </div>
      );
    } else if (type == "textarea") {
      const { TextArea } = Input;
      arr.splice(
        index,
        0,
        <div
          className="ant-form-item-container"
          type="textarea"
          key={id}
          index={id}
          draggable
        >
          <Form.Item label="Username" name="username">
            <TextArea />
          </Form.Item>
          <DeleteOutlined />
        </div>
      );
    }

    return arr;
  };
  const [arr, setArr] = useState([]);
  const [idValue, setId] = useState("");
  const drag = (ev) => {
    id = ev.target.getAttribute("index");
  };
  const formClick = (ev) => {
    let node = ev.target;
    if (node.tagName !== "svg" && node.className !== "formWidgetContext") {
      while (node.className !== "ant-form ant-form-horizontal") {
        if (node.getAttribute("index") !== null) {
          if (oldNode) {
            oldNode.classList.remove("ant-form-item-container-active");
            oldNode.classList.add("ant-form-item-container");
          }
          node.classList.remove("ant-form-item-container");
          node.classList.add("ant-form-item-container-active");
          oldNode = node;
        }
        node = node.parentNode;
      }
    } else if (node.tagName == "svg") {
      while (node.className !== "ant-form ant-form-horizontal") {
        if (node.getAttribute("index") !== null) {
          let index = node.getAttribute("index");
          let positionHover;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].props.index == index) {
              positionHover = i;
              break;
            }
          }
          arr.splice(positionHover, 1);
          setArr([...arr]);
        }
        node = node.parentNode;
      }
    }
  };
  const clear=()=>{
    setArr([])
  }
  return (
    <div className="formWidgetMain">
      <header className="formWidgetHeader">
        <a href="#!" onClick={clear}>清空</a>
        <a href="#!">预览</a>
      </header>
      <div className="formWidgetContainer">
        <div className="formWidgetContext" onDrop={drop} onDragOver={dragOver}>
          {/* 请从左侧列表中选择一个组件, 然后用鼠标拖动组件放置于此处. */}
          <Form
            name="basic"
            autoComplete="off"
            onClick={formClick}
            onDragStart={drag}
            labelCol={{
              span: 3,
            }}
            wrapperCol={{
              span: 21,
            }}
          >
            {arr.map((item) => {
              return item;
            })}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FormWidget;
