import styles from './Sidebar.module.css';

import userimg from '../assets/User Image.svg'
import cp2 from '../assets/LogoCp2.svg'
import { House, ChartLine, Wallet, FilePlus, Bank, UserCirclePlus, Bell, User } from 'phosphor-react';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      
      <div className={styles.userSection}>
        <img src={userimg} alt="User" className={styles.userImg} />
        <span className={styles.userName}>User test</span>
      </div>
      
      <div className={styles.sec}>
        <h3>Páginas recentes</h3>
        <ul>
          <li>Pagamentos</li>
          <li>Projeções</li>
        </ul>
      </div>

      <div className={styles.sec}>
        <h3>Páginas</h3>
        <ul>
          <li><a href="#"><House size={20} /> Home</a></li>
          <li className={styles.active}><a href="#"><Wallet size={20} /> Fluxo de caixa</a></li>
          <li><a href="#"><ChartLine size={20} /> Projeções</a></li>
          <li><a href="#"><FilePlus size={20} /> Nova transação</a></li>
          <li><a href="#"><Bank size={20} /> Bancos</a></li>
        </ul>
      </div>

      <div className={styles.sec}>
        <h3>Admin</h3>
        <ul>
          <li><a href="#"><UserCirclePlus size={20} /> Permitir acesso</a></li>
          <li><a href="#"><Bell size={20} /> Alerta</a></li>
        </ul>
      </div>

      <div className={styles.sec}>
        <h3>Perfil</h3>
        <ul>
          <li><a href="#"><User size={20} /> Usuário</a></li>
        </ul>
      </div>

      <div className={styles.logo}>
        <img src={cp2} alt="LogoCp2" />
      </div>
    </div>
  );
}
