import React, { useState, useEffect, useContext, createContext } from "react";

import axios from "axios";
import RoutePath from "./routes/RoutePath";
import { Navigate, redirect } from "react-router-dom";
import { AppContext } from "./providers/ContextProvider";



const App = () => {
  
  const [perf, setPerf] = useState([]);
  const [filtred, setFiltred] = useState([]);

  const [user, setUser] = useState({
    userName: "",
    permissions: [],
  });
  const redirectPath = "/profile";

  const loginCheck = (user) => {
    console.log(user)
    if (user === "admin") {
      setUser({ userName: user, permissions: ["view_extra"] });
      console.log("user is admin")
    } else {
      setUser({ userName: user, permissions: ["view_extra"] });
      console.log("user is not admin")
    }
    Navigate(redirectPath, { replace: true });
  };

  const test = ()=>{
    setUser('test')
  }

  const logOut = () => {
    setUser({ userName: "", permissions: [] });
  };

  useEffect(() => {
    let getPerfumes = async () => {
      try {
        const result = await axios.get(`http://localhost:3200/api/v1/perfumes`);
        setPerf(result.data);
        setFiltred(result.data);
        return result;
      } catch (error) {
        console.log(error);
      }
    };
    getPerfumes();
  }, []);

  const filterPerf = (filter) => {
    try {
      if (filter === "All") {
        setFiltred(perf);
      } else {
        let filt = perf.filter((el) => el.type === filter);
        setFiltred(filt);
      }
    } catch (error) {}
  };

  const searchPerf = (filter) => {
    console.log("from app", filter);
    try {
      if (filter !== "") {
        setFiltred(filtred.includes(filter));
      }
      setFiltred(perf);
    } catch (error) {
      console.log(error);
    }
  };

  
  // return <RouterProvider router={router}  />;
  return (
    <div className="App">
      <AppContext.Provider value={{user:{username:'test', permissions:['test']}, loginCheck}}>
        <RoutePath
          filtred={filtred}
          searchPerf={searchPerf}
          filterPerf={filterPerf}
        />
      </AppContext.Provider>
    </div>
  );
};


export default App;
