import AuthInterface from "@Components/data/auth.d";
import useForm from "@Hooks/useForm";
import { AuthService } from "@Services/Users";
import Login from "./Login";
import { toast } from "react-toastify";
import useMobileDetect from "@Hooks/useMobileDetect";
const initialValues: AuthInterface.ILoginProps = {
  username: "",
  password: "",
  validation: {
    error: AuthInterface.ErrorValidation.None,
    message: "",
  },
};
export default () => {
  const { form, handleChange } = useForm<AuthInterface.ILoginProps>(
    initialValues,
  );
  const handleSubmit = async () => {
    const { isAndroid, isDesktop, isIos, isMobile } = useMobileDetect();
    let deviceData = {
      isAndroid: isAndroid(),
      isDesktop: isDesktop(),
      isIos: isIos(),
      isMobile: isMobile(),
    };
    const { status, data, message } = await AuthService.signIn({
      userName: form.username,
      password: form.password,
      device: JSON.stringify(deviceData),
    });
    if (status === 1) {
      toast.success("You are successfully logged in.");
    } else {
      toast.error(`
      There is an error on login process:
      ${message}
      `);
    }
  };
  return (
    <Login {...form} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};
