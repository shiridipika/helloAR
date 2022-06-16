import { useState } from "react";
import Main from "./Main";
import SideBar from "./Sidebar";



function MainContent() {

    const [display, setDisplay] = useState(false);

    function linkClick (name) {
      if (name==='Settings') {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }

    return (
        <div class="container-fluid">
            <SideBar click={linkClick}/>
            {display && <Main />}
        </div>
    )
}

export default MainContent;