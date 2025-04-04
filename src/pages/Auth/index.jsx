import { Navbar } from "../../Components/Navbar";
import { Login } from "../../Components/Login";
import { Fragment } from "react";
export const AuthLogin = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
      <Login />
      </main>
     
    </Fragment>
  );
};
