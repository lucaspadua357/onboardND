import { useState } from "react";
import styles from "./Frame.module.css";
import { FunnelSimple } from "phosphor-react";

export function Frame() {
  const data = [
    {
      name: "Pedro",
      debit: true,
      date: "25/02/25",
      value: "R$ 880,00",
      description: "Recebimento por serviços prestados, desenvolvimento de web site e trafégo pago"
    },
    {
      name: "Vítor",
      debit: false,
      date: "09/03/25",
      value: "R$ 130,00",
      description: ""
    },
    {
      name: "Lucas",
      debit: true,
      date: "17/03/25",
      value: "R$ 1130,00",
      description: ""
    },
    {
      name: "Agiota",
      debit: true,
      date: "25/02/25",
      value: "R$ 9000,00",
      description: ""
    },
    {
      name: "Tigrinho",
      debit: false,
      date: "09/03/25",
      value: "R$ 15000,00",
      description: ""
    },
    {
      name: "Adega do Zé",
      debit: true,
      date: "17/03/25",
      value: "R$ 300,00",
      
    },
    {
      name: "Cp2",
      debit: true,
      date: "25/03/25",
      value: "R$ 280,00",
      
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={styles.cont}>
      <div className={styles.filter}>
        <div className={styles.buttonGroup}>
          <button className={styles.filterButtonActive}>Mês</button>
          <button className={styles.filterButton}>Ano</button>
        </div>
        <button className={styles.filterIconButton}>
          <FunnelSimple size={20} /> Filtrar
        </button>
      </div>

      <div className={styles.dashboard}>
        <div className={styles.tableContainer}>
          <h3>Entradas e Saídas</h3>
          <table className={styles.table}>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => setSelectedItem(item)} 
                  className={
                    selectedItem?.name === item.name ? styles.activeRow : ""
                  }
                >
                  <th>{item.name}</th>
                  <th>{item.debit ? "Entrada" : "Saída"}</th>
                  <th>{item.date}</th>
                  <th>{item.value}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.details}>
          {selectedItem ? (
            <div>
              <h3>Detalhes</h3>
              <p4>
                <strong></strong> {selectedItem.date}
              </p4>
              <p>
                <strong>Nome:</strong> {selectedItem.name}
              </p>
              <p>
                <strong>Tipo:</strong> {selectedItem.debit ? "Entrada" : "Saída"}
              </p>
              <h4>Descrição</h4>
              <p7>
                <strong></strong> {selectedItem.description}
              </p7>
              <p8>
                <strong>Valor</strong> {selectedItem.value}
              </p8>
            </div>
          ) : (
            <div className={`${styles.detailsEmpty}`}>
              <p1>Hmm parece que nenhum item foi selecionado ainda</p1>
              <p>Selecione algo para que possamos te ajudar!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
