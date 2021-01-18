import AuthInterface from "@Components/data/auth.d";
import { AuthContainer, SignInContent, Slogan } from "./styles";

export default ({ childern }: AuthInterface.IAuthForm) => {
  return (
    <AuthContainer>
      <SignInContent>
        <Slogan>
          <div className="inner">
            <div className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className="slogan">
              <h2>FEEL FREE, BE FREE</h2>
              <h6>You are the Author!</h6>
            </div>
          </div>
        </Slogan>
        {childern}
      </SignInContent>
    </AuthContainer>
  );
};
