import styles from "./info.module.css"
const Info = () =>{
    return (

    <div className={styles.container}>
        <div class={styles.navtext} >แบบฟอร์มขอพิมพ์/ถ่ายสำเนา</div>
        <form className={styles.form}>
            <input type="text" placeholder="รหัสพนักงาน" name="en" required />
            <input
            type="date"
            placeholder="DD/MM/YYYY"
            name="date"
            equired
            />
            <select name="PaperSize" id="paper">
            <option value={false}>
                ขนาดกระดาษ
            </option>
            <option value={true}>A4</option>
            <option value={false}>A3</option>
            </select>
            <select name="Color" id="color">
            <option value={false}>
                สี
            </option>
            <option value={true}>สี</option>
            <option value={false}>ขาวดำ</option>
            </select>
            <select name="PaperSite" id="site">
             <option value={true}>
                แบบที่ต้องการพิมพ์
            </option>
            <option value={true}>หน้าเดียว</option>
            <option value={false}>หน้าหลัง</option>
            </select>
            <input type="text" placeholder="จำนวน(ชุด)" name="quatity" required />
        {/* <input type="text" placeholder="จำนวน(ชุด)" name="quatity" required /> */}
         <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="จุดประสงค์ที่ต้องการพิมพ์/ถ่ายสำเนา"></textarea>
        </form>
            <button className={styles.button} type="submit">Submit</button>
    </div>
        // <div class={styles.container}>
        //     <form class={styles.form}>
        //     Enter Number
        //     <input type="text" />
        //     <div>
        //         <div>
        //             Name : 
        //         </div>
        //         <div>
        //             Surname :
        //         </div>
        //     </div>
        //     <div>
        //             <div>
        //                 Date :
        //                 <input type="date"/>
        //             </div>
        //     </div>
        //     <div>
        //         Paper size  
        //         <select name="" id="">
        //             <option value="">1. A4</option>
        //             <option value="">2. A3</option>
        //         </select>
        //     </div>
        //     <div>
        //         Color 
        //         <select name="" id="">
        //             <option value="">1. Colourful</option>
        //             <option value="">2. Black/White</option>
        //         </select>
        //     </div>
        //     <div>
        //         Page Type
        //         <select name="" id="">
        //             <option value="">1. Single</option>
        //             <option value="">2. Double</option>
        //         </select>
        //     </div>
        //     <div>
        //        จำนวนชุด 
        //        <input type="number" min={0}/>
        //     </div>
        //     <div>
        //        Description/Purpose
        //        <textarea type="text" />
        //     </div>
        //     <button>
        //         accept
        //     </button>
        //     </form>
        // </div>
    )
}
export default Info;
