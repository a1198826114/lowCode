import "./index.less";
import { Input, Form } from "antd";
import { useState } from "react";

function FormWidget() {
  const drop = (ev) => {
    ev.preventDefault();
    var type = ev.dataTransfer.getData("type");
    let node = ev.target;
    let index;
    let position = 0;
    let oldclassName = node.className;
    if (node.className !== "formWidgetContext") {
      while (node.className !== "ant-form ant-form-horizontal") {
        if (node.getAttribute("index") !== null) {
          index = node.getAttribute("index");
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].props.index == index) {
              position = i;
            }
          }
        }
        node = node.parentNode;
      }
    }

    // const index=node.getAttribute('index')?0:node.getAttribute('index')
    console.log(ev.target, 655, arr);
    if (oldclassName == "ant-row ant-form-item") {
      setArr(() => {
        let res = addNode(arr, type, position + 1);
        return [...res];
      });
    } else if (oldclassName == "formWidgetContext") {
      setArr(() => {
        let res = addNode(arr, type, arr.length);
        return [...res];
      });
    } else {
      setArr(() => {
        let res = addNode(arr, type, position);
        return [...res];
      });
    }
  };
  const addNode = (arr, type, index) => {
    if (type == "input") {
      arr.splice(
        index,
        0,
        <Form.Item
          label="Username"
          name="username"
          draggable="true"
          index={arr.length}
        >
          <Input />
        </Form.Item>
      );
    } else if (type == "textarea") {
      const { TextArea } = Input;
      arr.splice(
        index,
        0,
        <Form.Item label="Username" name="username" index={arr.length}>
          <TextArea />
        </Form.Item>
      );
    }

    return arr;
  };
  const [arr, setArr] = useState([]);
  return (
    <div className="formWidgetMain">
      <header className="formWidgetHeader">
        <a href="javascript:;">清空</a>
        <a href="javascript:;">预览</a>
      </header>
      <div className="formWidgetContainer">
        <div
          className="formWidgetContext"
          onDrop={drop}
          onDragOver={(e) => e.preventDefault()}
        >
          {/* 请从左侧列表中选择一个组件, 然后用鼠标拖动组件放置于此处. */}
          <Form
            name="basic"
            autoComplete="off"
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
