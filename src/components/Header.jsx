import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">
            <h2>Cooking Ninja</h2>
          </Link>
        </div>
        <div className={styles.search}>
            <input type="text" placeholder='Search Recipe...'/>
        </div>
        <div className={styles.navigation}>
          <Link to="/create" className={styles.menuItem}>
            <IoMdAddCircle className="icon" />
            Create Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header