import styles from "./Navbar.module.css";
import hanalogo from "../../../public/logoH.jpeg"
import Image from 'next/image'

const Navbar = () =>{
return(

    <div class={styles.container}>
        <div>         
        <Image
        src={hanalogo}
        width={80}
        height={80}
        alt="hanalogo"/> 
        </div>
        <div class={styles.navtext} >HANA</div>
    </div>
)
}
export default Navbar;