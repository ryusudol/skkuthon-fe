import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Layout.module.css";

const Layout = ({ user, children }) => {
  return (
    <div>
      <Header />
      <section className={styles.main}>
        <SideBar user={user} />
        {children}
      </section>
    </div>
  );
};

export default Layout;
