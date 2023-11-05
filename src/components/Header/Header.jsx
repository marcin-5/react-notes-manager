import { AuthAPI } from "api/auth";
import logoSrc from "assets/images/logo.png";
import { Logo } from "components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "store/auth/auth-selectors";
import { setUser } from "store/auth/auth-slice";
import s from "./style.module.css";

export function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signout = () => {
    AuthAPI.signout();
    dispatch(setUser(null));
  };
  const renderAuthProfil = () => {
    return (
      <div>
        <img
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`}
          style={{ width: 40 }}
          className="rounded-circle"
        />
        <div>Hello {user.email}</div>
        <Link to="#" onClick={signout}>
          Signout
        </Link>
      </div>
    );
  };

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          image={logoSrc}
          title="Notelet"
          subtitle="another box of notelets"
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">{renderAuthProfil()}</div>
    </div>
  );
}
