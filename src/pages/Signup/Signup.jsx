import { AuthAPI } from "api/auth";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "store/auth/auth-slice";
import { showAlert } from "utils/sweet-alert";
import s from "./style.module.css";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      showAlert("error", "Password don't match");
      return;
    }
    try {
      const user = await AuthAPI.signup(email, password);
      dispatch(setUser(user));
      await showAlert("success", "Signup succeed, you are now logged in.");
      navigate("/");
    } catch (err) {
      showAlert("error", err.message);
    }
  };
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signup <br /> to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder="Email" onTextChange={setEmail} />
        <Input placeholder="Password" type="password" onTextChange={setPassword} />
        <Input placeholder="Repeat password" type="password" onTextChange={setPassword2} />
        <ButtonPrimary type="submit" className={s.button}>
          Sign in!
        </ButtonPrimary>
        <span>
          Already have an account? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
