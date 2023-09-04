import React, { Suspense } from "react";
import AllRoutes from "./AllRoutes";
import Private from "./Private";
import Public from "./Public";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "../Pages/NotFound";
import Navbar from "../Pages/Navbar";

const App = () => {
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
        
          <div>
        
                      <Navbar />
                     
            <Routes>

              {AllRoutes.map((item) => {
                return (
                <>
                  <Route
                    exact
                    element={item.private ? <Private /> : <Public />}>
                    
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
