
import "./index.less";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import ComponentLibrary from "./componentLibrary";
const { TabPane } = Tabs;
export default function Widgetpanel() {
  return (
    <div className="left">
      <Tabs  centered>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              组件库
            </span>
          }
          key="1"
        >
          <ComponentLibrary/>
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              表单模板
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  );
}
