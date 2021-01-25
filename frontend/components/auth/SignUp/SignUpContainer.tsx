import AuthInterface from "@Components/data/auth.d";
import useForm from "@Hooks/useForm";
import { AuthService } from "@Services/Users";
import SignUp from "./SignUp";
import { toast } from "react-toastify";
const initialValues: AuthInterface.ISignUpProps = {
  username: "",
  password: "",
  validation: {
    error: AuthInterface.ErrorValidation.None,
    message: "",
  },
  agreeRols: false,
  email: "",
  name: "",
  lastName: "",
  isAcceptILegal: false,
  gender: "Male",
  rePassword: "",
};
export default () => {
  const { form, handleChange } = useForm<AuthInterface.ISignUpProps>(
    initialValues,
  );
  const handleSubmit = async () => {
    if (!form.isAcceptILegal) {
      toast.error("please check Agree to terms and conditions");
      return;
    }
    const { status, message } = await AuthService.signUp({
      device: "",
      ...form,
      userName: form.username,
      gender: form.gender == "Male" ? 1 : 0,
    });
    if (status === 1) {
      // toast.success("You are successfully logged in.");
    } else {
      toast.error(`
      There is an error on login process:
      ${message}
      `);
    }
  };
  return (
    <SignUp {...form} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};
