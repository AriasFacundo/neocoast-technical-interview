import { useForm } from "react-hook-form";
import doLogin from "../api/user.service"; // doLogin retorna una Promise
import "./styles.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await doLogin(data.username, data.password);
      // TODO: Manejar caso de éxito
    } catch (error) {
      // TODO: Manejar caso de error
      console.error("Login failed", error);
    }
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: "Username is required" })}
        className={errors.username ? "input-error" : ""}
      />
      {errors.username && (
        <span className="error">{errors.username.message}</span>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className={errors.password ? "input-error" : ""}
      />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
