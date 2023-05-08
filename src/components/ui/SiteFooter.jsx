import { Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandVk, IconBrandTelegram } from '@tabler/icons-react';
import useStyles from "./SiteFooteStyles";


const SiteFooter = () => {
    const { classes } = useStyles("dark");

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <img width='30' src='/test-img.svg'/>

                <Group className={classes.links}>
                    <a href="#">Может ссылка</a>
                    <a href="#">а может и нет</a>
                    <a href="#">а может и не может</a>
                </Group>

                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTelegram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandVk size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}

export default SiteFooter