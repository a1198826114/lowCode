import { Button } from "antd";
import { Fragment } from "react";
import "./App.less";
import vform from "./assets/vform.png";
import  Container  from "./components/container";
import FormWidget from "./components/formWidget";
import Widgetpanel from "./components/widgetPanel";
function App() {
  return (
    <Fragment>
      <header className="mainHeader">
        <div>
          <img src={vform} alt="logo" />
          <span> React表单设计器</span>
        </div>
      </header>
      <div className="mainContainer">
        <Widgetpanel />
        <FormWidget/>
      </div>
      {/* <Container/> */}
    </Fragment>
  );
}

export default App;
