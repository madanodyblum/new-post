import AuthInterface from "@Components/data/auth.d";
import { Button } from "@Components/shareable/ButtonsStyles";
import { ErrorMessageValidation } from "@Components/shareable/styles";
import Link from "next/link";
import { SignForm } from "../styles";

export default ({
  username,
  password,
  handleChange,
  validation,
  handleSubmit,
}: AuthInterface.ILoginProps) => {
  return (
    <SignForm>
      <div className="sign-body">
        <div className="title">Login</div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-email-outline"></i>
            </div>
            <input
              type="email"
              onChange={handleChange}
              className="my-input"
              name="username"
              value={username}
              placeholder="Email Address"
            />
            <ErrorMessageValidation
              display={validation.error === "username" ? true : false}
            >
              {validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-lock-outline"></i>
            </div>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
              className="my-input"
              placeholder="Password"
            />
            <ErrorMessageValidation
              display={validation.error === "password" ? true : false}
            >
              {validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="button-sign">
          <Button className="btn-default" onClick={handleSubmit}>
            Sign In<i className="mdi mdi-chevron-right"></i>
          </Button>
        </div>
        <div className="login">
          <span className="text">
            Don't have an account?{" "}
            <Link shallow href="/auth/signup">
              <a>Sign Up</a>
            </Link>
          </span>
        </div>
      </div>
    </SignForm>
  );
};
