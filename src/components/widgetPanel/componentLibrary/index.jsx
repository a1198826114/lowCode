import { Collapse } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import Item from "antd/lib/list/Item";
const { Panel } = Collapse;
const list = [
  {
    type:'input',
    name: "输入框",
    icon: <AppleOutlined />,
  },
  {
    type:'textarea',
    name: "文本域",
    icon: <AndroidOutlined />,
  },
  {
    type:'radio',
    name: "单选框",
    icon: <AndroidOutlined />,
  },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
`;
export default function ComponentLibrary() {
  const drag=(ev)=>{
    console.log(ev.target,546,ev.target.getAttribute('type'))
    ev.dataTransfer.setData("type",ev.target.getAttribute('type'));
  }
  return (
    <Collapse ghost expandIconPosition="right">
      <Panel header="容器" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="基础字段" key="2">
        <ul onDragStart={drag}>
          {list.map((item) => {
            return (
              <li draggable="true" key={item.type} id={item.name} type={item.type}>
                {item.icon}
                {item.name}
              </li>
            );
          })}
        </ul>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
