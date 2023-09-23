import { useRouter } from "next/router";

import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();

  const onLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <span onClick={onLogoClick} className={styles.logoTitle}>
        SKKU Medical
      </span>
    </header>
  );
};

export default Header;
