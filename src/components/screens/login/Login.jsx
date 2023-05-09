import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Stack,
    MantineColor
} from '@mantine/core';
import styles from "./Login.module.scss"
import SiteHeader from "../../ui/SiteHeader";
import SiteFooter from "../../ui/SiteFooter";
const Login = () => {
    const [type, toggle] = useToggle(['login', 'register']);
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
                        Оркестратор передает свой поклон, зарегестрируйся
                    </Text>

                    <Divider labelPosition="center" my="lg" />

                    <form onSubmit={form.onSubmit(() => {})}>
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    radius="md"
                                />
                            )}

                            <TextInput
                                required
                                label="Адрес электронной почты"
                                placeholder="ПримерАдресаМыла@мэил.ру"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'имеил инвалид..'}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Пароль"
                                placeholder="раздватрикувэе"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'бро) введи норм пароль'}
                                radius="md"
                            />

                            {type === 'register' && (
                                <Checkbox
                                    label="I accept terms and conditions"
                                    checked={form.values.terms}
                                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                />
                            )}
                        </Stack>

                        <Group position="center" mt="xl">
                            <Button color="green.7" type="submit" radius="xl">
                                Лог ин
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    );
}

export default Login