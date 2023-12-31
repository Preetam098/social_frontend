import React, { Suspense } from "react";

import AllRoutes from "./AllRoutes";
import Private from "./Private";
import Public from "./Public";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Pages/Navbar";
import Dashboard from "../Pages/Dashboard";

const App = () => {
  const { pathname } = useLocation();
  const some = ["/navbar",];
  const isShow = some.includes(pathname);



  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-full flex justify-center items-center">
            <img src="" className="w-44" alt="loader" />
          </div>
        }
      >
        <Toaster />
<Navbar/>
        <div>
      {/* <Navbar />  */}
          <Routes>
            {AllRoutes.map((item) => {
              return (
                <>
                
                  <Route
                    exact
                    element={item.private ? <Private /> : <Public />}
                  >
                    <Route
                      name={item.name}
                      exact={true}
                      path={item.path}
                      element={item.element}
                    />
                  </Route>
                </>
              );
            })}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Suspense>
    </>
  );
};

export default App;
