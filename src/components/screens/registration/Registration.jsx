import styles from "./Registration.module.scss"
const Registration = () =>{
    return <div className={styles.wrapper}>
        <img width="70" src="/test-img.svg"/>
        <div className={styles.header}>Введи логин епту</div>
        <input className="loginInput"/>
        <div className={styles.header}>Введи пароль епту</div>
        <input className="passwordInput"/>
        <button className={styles.regButton}>Зарегестрируй меня папочка</button>
    </div>
}

export default Registration