import Header from "../../ui/SiteHeader";
import styles from "./Home.module.scss"
import SiteFooter from "../../ui/SiteFooter";







const Home = () =>{

    return <div>
        <Header></Header>
        <div className={styles.wrapper} >

        </div>
        <SiteFooter></SiteFooter>
    </div>
}

export default Home