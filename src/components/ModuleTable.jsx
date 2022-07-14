import React, { useState } from "react";
import SmallTable from "./SmallTable";

function ModuleTable({ auth, content }) {
  const [option, setOption] = useState()
  return (
    <div className="container">
      <div className="table">
        <div className="nav">
          <button className={option === "content" ? "selectedButton" : ""} onClick={() => setOption("content")}>Content_module</button>
          <button className={option === "auth" ? "selectedButton" : ""} onClick={() => setOption("auth")}>Auth_module</button>
        </div>
        <SmallTable option={option} auth={auth} content={content}/>
      </div>
    </div>
  );
}

export default ModuleTable;
