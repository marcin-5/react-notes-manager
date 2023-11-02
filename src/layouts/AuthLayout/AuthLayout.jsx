import { ReactComponent as LogoSVG } from "assets/images/logo.svg";
import s from "./style.module.css";

export function AuthLayout({ children }) {
  const header = (
    <div className={s.header}>
      <LogoSVG className={s.logoTop} />
      <h3 className={s.logoTitleTop}>Notelet</h3>
    </div>
  );
  const background = (
    <div>
      <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.logoTitle}>Notelet</h1>
      </div>
      <p>One place for the team notes</p>
    </div>
  );
  return (
    <div className={s.root}>
      {header}
      <div className={s.leftSection}>{children}</div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
