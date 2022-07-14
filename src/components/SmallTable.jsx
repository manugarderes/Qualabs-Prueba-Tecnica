import React, { useEffect, useState } from "react";
import Users from "./Users";

function SmallTable({ auth, content, option }) {
  useEffect(() => {
    setModule();
  }, [option]);

  const [module, setModule] = useState();
  return (
    <div className="table small">
      <div className="nav">
        {option === "auth" &&
          auth.map((item) => (
            <button
              key={item.module}
              className={module === item ? "selectedButton" : ""}
              onClick={() => setModule(item)}
            >
              {item.module}
            </button>
          ))}
        {option === "content" &&
          content.map((item) => (
            <button
              key={item.module}
              className={module === item ? "selectedButton" : ""}
              onClick={() => setModule(item)}
            >
              {item.module}
            </button>
          ))}
      </div>
      <Users option={option} auth={auth} content={content} module={module} />
    </div>
  );
}

export default SmallTable;
