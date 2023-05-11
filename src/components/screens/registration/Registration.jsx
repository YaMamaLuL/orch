import {upperFirst, useToggle} from "@mantine/hooks";
import {useForm} from "@mantine/form";
import SiteHeader from "../../ui/SiteHeader";
import styles from "./Registration.module.scss";
import {Button, Checkbox, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput} from "@mantine/core";
import SiteFooter from "../../ui/SiteFooter";

const Registration =() =>{
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <div>
            <SiteHeader></SiteHeader>
            <div className={styles.wrapper}>
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" weight={500}>
                        Оркестратор передает свой поклон, зарегистрируйся
                    </Text>

                    <Divider labelPosition="center" my="lg" />

                    <form onSubmit={form.onSubmit(() => {})}>
                        <Stack>
                            <TextInput
                                    label="Ваше имя"
                                    placeholder="Бэйбиджон"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    radius="md"
                            />

                            <TextInput
                                required
                                label="Адрес электронной почты"
                                placeholder="ПримерАдресаМыла@мэил.ру"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Пароль"
                                placeholder="раздватрикувэе"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Повторение пароля"
                                placeholder="раздватрикувэе"
                                error={form.errors.password && 'Password should include at least 6 characters'}
                                radius="md"
                            />


                            <Checkbox
                                color="green"
                                label="Согласен со всем, что написано в том длинном документе"
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        </Stack>

                        <Group position="center" mt="xl">
                            <Button color="green.7" type="submit" radius="xl">
                                Регистер
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    );
}

export default Registration