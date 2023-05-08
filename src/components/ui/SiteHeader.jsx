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
                    <img src='/test-img.svg' width="30" alt = "bobby"/>

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <NavLink to="/*" className={classes.link}>
                            Home
                        </NavLink>
                        <NavLink to="/*" className={classes.link}>
                            Docs
                        </NavLink>
                        <NavLink to="/*" className={classes.link}>
                            Prices
                        </NavLink>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <NavLink className={styles.LoginButton}  to="/login" id = "login">Log in</NavLink>
                        <NavLink className={styles.SignUpButton}  to="/registration" id='signup'>Sign Up</NavLink>
                    </Group>
                </Group>
            </Header>
        </Box>
    );
}



export default HeaderMegaMenu