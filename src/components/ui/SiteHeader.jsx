import {
    Header,
    Group,
    Box,
} from '@mantine/core';
import {NavLink} from "react-router-dom";
import styles from './SiteHeader.module.scss'
import useStyles from "./SiteHeaderStyles";

const HeaderMegaMenu = () => {

    const { classes } = useStyles();

    return (
        <Box pb={120}>
            <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>
                    <img src='/test-img.svg' width="30" alt = "bobby" style = {{marginRight:2+'%'}}/>

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile} style={{marginRight:-2+"%"}}>
                        <NavLink to="/" className={classes.link}>
                            Домой
                        </NavLink>
                        <NavLink to="/*" className={classes.link}>
                            Документация
                        </NavLink>
                        <NavLink to="/*" className={classes.link}>
                            Бложик
                        </NavLink>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <NavLink className={styles.LoginButton}  to="/login" id = "login">Вход</NavLink>
                        <NavLink className={styles.SignUpButton}  to="/registration" id='signup'>Регистрация</NavLink>
                    </Group>
                </Group>
            </Header>
        </Box>
    );
}



export default HeaderMegaMenu