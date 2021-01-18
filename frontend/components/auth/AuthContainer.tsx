import AuthInterface from "@Components/data/auth.d";
import AuthForm from "./AuthForm";
import LoginContainer from "./Login/LoginContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import { ToastContainer } from "react-toastify";

export default ({ kindForm }: AuthInterface.IAuthForm) => {
  return (
    <>
      <ToastContainer position="top-left" />

      {kindForm == "Login" ? (
        <AuthForm childern={<LoginContainer />} />
      ) : (
        <AuthForm childern={<SignUpContainer />} />
      )}
    </>
  );
};
