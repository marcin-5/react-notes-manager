import logoSrc from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Logo } from "components/Logo";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function Header(props) {
  const navigate = useNavigate();
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
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>Add note +</ButtonPrimary>
      </div>
    </div>
  );
}
