import styles from "./status.module.css"
const Status = () =>{
    return (
        <div>

            <h2 className={styles.title}>Latest Transactions</h2>
        <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
      
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                 
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>Done</span>
              </td>
              <td>14.02.2024</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                 
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>
                  Cancelled
                </span>
              </td>
              <td>14.02.2024</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
              
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    // <div className={styles.container}>
    //     <div>
    //         <div>
    //             Employee Number :
    //         </div>
    //         <div>
    //             Name :
    //         </div>
    //         <div>
    //             Department : 
    //         </div>
    //     </div>
    //     <div>
    //         <div>
    //             Date start
    //             <input type="date"/>
    //         </div>
    //         <div>
    //             Date End
    //             <input type="date"/>
    //         </div>
    //     </div>
    // </div>

            

    )

}
export default Status;