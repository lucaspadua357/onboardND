import styles from './Card.module.css';
import { PlusCircle, FilePlus } from 'phosphor-react';

export function Card () {
    return(
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <p>Registrar uma nova transação?<br />Clique aqui!</p>
        <button className={styles.newTransactionButton}>
          <FilePlus size={20} />
          Nova transação
        </button>
      </div>

      <div className={styles.card}>
        <p>Entradas deste ano</p>
        <strong>$ 1,329.00</strong>
        <small>10 % a mais que o ano passado</small>
      </div>

      <div className={styles.card}>
        <p>Saídas deste ano</p>
        <strong>$ 1,329.00</strong>
        <small>10 % a mais que o ano passado</small>
      </div>
    </div>
    );
}