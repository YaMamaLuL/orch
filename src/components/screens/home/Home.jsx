import Header from "../../ui/SiteHeader";
import styles from "./Home.module.scss"
import SiteFooter from "../../ui/SiteFooter";
import advantagesMenu from "./advantagesList"
import orchDuties from "./orchDutyList"

const Home = () =>{
    return <div>
        <Header></Header>
        <div className={styles.sloganWrapper} >
            <h1 className={styles.slogan}>Создайте свое приложение,<br/>а запуск оставьте на нас</h1>
        </div>
        <div className={styles.infoWrapper}>
            <h1>Как это работает?</h1>
            <div className={styles.advantagesWrapper}>
                <ul className={styles.advantagesMenu}>
                    {advantagesMenu.map((item, idx) => (
                        <li key = {"advantage number ${idx}"}><h3>{idx + 1}</h3>{item.title}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.dutyWrapper}>
                <h1>В обязанности оркестратора будет входить:</h1>
                <ul className={styles.dutyMenu}>
                    {orchDuties.map((item, idx)=>(<li key = {`duty num ${idx}`}>{item.title}</li>))}
                </ul>
            </div>
        </div>
        <SiteFooter></SiteFooter>
    </div>
}

export default Home