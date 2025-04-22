import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success("Login successful!"))
      .catch(() => toast.error("Login failed. Please check your credentials."));
    action.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}>
        <Form autoComplete="off" className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}