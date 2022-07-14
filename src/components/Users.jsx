import React, { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";

function Users({ auth, content, option, module }) {
  return (
    <>
      {module ? (
        <div className="users">
          <h3>
            Number of users in <span style={{color:"red"}}>{module && module.module}</span>:{" "}
            {module && module.users.length}
          </h3>
          <div className="usersBox">
            {module &&
              module.users.map((user) => <button key={user}>{user}</button>)}
          </div>
          <div className="dividerBox"></div>
          <div className="tools">
            <button style={{backgroundColor:"#dc5050", color:"white", fontWeight:"bold"}}>Delete <BsFillTrashFill/></button>
            <button style={{backgroundColor:"#dbc780", color:"white", fontWeight:"bold"}}>Advice <BsFillLightbulbFill/></button>
            <button style={{backgroundColor:"#f9b6af", color:"black", fontWeight:"bold"}}>Create <BsFillPlusCircleFill/></button>
            <button style={{backgroundColor:"#45c3bc", color:"white", fontWeight:"bold"}}>Submit <BsArrowBarRight/></button>
          </div>
        </div>
      ) : (
        <div className="users">
          <h3>Select a Module</h3>
        </div>
      )}
    </>
  );
}

export default Users;
