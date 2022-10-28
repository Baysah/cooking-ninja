import Header from './Header';
import Footer from './Footer';

//style
import styles from './Layout.module.css'


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
