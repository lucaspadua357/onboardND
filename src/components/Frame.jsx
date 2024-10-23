import styles from './Frame.module.css'; // Importando os estilos de CSS Module
import { FunnelSimple } from 'phosphor-react'

export function Frame() {
  return (
    <div className={styles.cont}>
      {/* Filtros */}
      <div className={styles.filter}>
        <div className={styles.buttonGroup}>
          <button className={styles.filterButtonActive}>Mês</button>
          <button className={styles.filterButton}>Ano</button>
        </div>
        <button className={styles.filterIconButton}>
          <i className="fas fa-filter"></i><FunnelSimple size={20} /> Filtrar
        </button>
      </div>

      <div className={styles.dashboard}>
        <div className={styles.tableContainer}>
          <h3>Entradas e Saídas</h3>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Pedro Paulo</td>
                <td>Entrada</td>
                <td>23/02/2025</td>
                <td>R$ 153,00</td>
              </tr>
              <tr>
                <td>Netflix</td>
                <td>Saída</td>
                <td>13/01/2025</td>
                <td>R$ 99,00</td>
              </tr>
              <tr>
                <td>Carlinhos Maia</td>
                <td>Entrada</td>
                <td>23/02/2027</td>
                <td>R$ 9999,00</td>
              </tr>
              <tr>
                <td>José Pedro</td>
                <td>Entrada</td>
                <td>23/02/2024</td>
                <td>R$ 2,00</td>
              </tr>
              <tr>
                <td>Agiota</td>
                <td>Saída</td>
                <td>23/02/2025</td>
                <td>R$ 1533,00</td>
              </tr>
              <tr>
                <td>Tigrinho</td>
                <td>Entrada</td>
                <td>23/02/2025</td>
                <td>R$ 1599,00</td>
              </tr>
              <tr>
                <td>Neide</td>
                <td>Saída</td>
                <td>23/02/2025</td>
                <td>R$ 7,00</td>
              </tr>             
            </tbody>
          </table>
        </div>

        {/* Mensagem no lado direito */}
        <div className={styles.details}>
          <p1>Hmm parece que nenhum item foi selecionado ainda</p1>
          <p2>Selecione algo para que possamos te ajudar!</p2>
        </div>
      </div>
    </div>
  );
}
