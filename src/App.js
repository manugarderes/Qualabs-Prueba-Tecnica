import { useEffect, useState } from "react";
import "./App.css";
import BlackOut from "./components/BlackOut";
import ModuleTable from "./components/ModuleTable";
import users from "./users.json";

function App() {
  useEffect(() => {
    let auth_module = [];
    users.map((user) => {
      const module = auth_module.find(
        (item) => item.module === user.provider.auth_module
      );
      if (!module) {
        auth_module.push({
          module: user.provider.auth_module,
          users: [user.name],
        });
      } else {
        module.users = [...module.users, user.name];
      }
    }); 
    // 1. Hago un mapeo de todos los usuarios
    // 2. En el caso de que el auth module de ese usuario no se encuentre el el array creado...
    // 2.1 Agrego al array creado un objeto con el nombre del auth module y la lista de usuarios con solo el usuario mapeado en ese instante
    // 2.2 En caso de que ya se encuentre en el array creado, modifico su lista de usuarios y le agrego el usuario mapeado en ese instante
    // 3. Por ultimo guardo el array creado en un estado de React

    /// Replico el procedimiento con content module 

    let content_module = [];
    users.map((user) => {
      const module = content_module.find(
        (item) => item.module === user.provider.content_module
      );
      if (!module) {
        content_module.push({
          module: user.provider.content_module,
          users: [user.name],
        });
      } else {
        module.users = [...module.users, user.name];
      }
    });

    ///

    setAuth(auth_module)
    setContent(content_module)
  }, []);
  const [auth, setAuth] = useState();
  const [content, setContent] = useState();

  return <div>
    <BlackOut/>
    <ModuleTable auth={auth} content={content}/>
  </div>;
}

export default App;
