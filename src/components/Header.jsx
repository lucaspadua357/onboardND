import { MagnifyingGlass, Bell, CaretRight } from 'phosphor-react';
import styles from './Header.module.css'; 

export function Header() {
  return (
    <div className={styles.header}>
      <span><CaretRight size={24} />Fluxo de caixa</span>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="     Pesquisar..."
          />
          <MagnifyingGlass size={18} className={styles.searchIcon} />
        </div>
        <div className={styles.icon}>
          <Bell size={28} color="#fff" />
        </div>
      </div>
    </div>
  );
}
