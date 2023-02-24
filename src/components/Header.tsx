import styles from "./Header.module.css";
import IconLogo from "../assets/to-do.svg";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={IconLogo} alt="To-Do Logotipo" className={styles.Logo} />
    </header>
  );
}
