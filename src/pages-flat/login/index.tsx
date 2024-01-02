'use client';

import {Button, Group, PasswordInput, TextInput,} from '@mantine/core';
import {Rounded} from "@src/shared/common";
import {useRouter} from "next/navigation";
import {useForm} from "@mantine/form";

export default () => {
    const router = useRouter()

    const form = useForm({
        initialValues: {
            password: "",
            login: "",
        },
        validate: {
            password: (value) => value.length == 0,
            login: (value) => value.length == 0,
        }
    });

    return (
        <div style={{
            paddingTop: "40px"
        }}>
            <Rounded style={{
                width: 420,
                margin: "0 auto",
                padding: 20
            }}>
                <TextInput label="Логин" placeholder="moderator4517" required {...form.getInputProps('login')}/>
                <PasswordInput label="Пароль" placeholder="password" required
                               mt="md" {...form.getInputProps('password')}/>
                <Group mt="md">
                    <Button onClick={router.back} w="100%" style={{flex: 1}}>
                        Назад
                    </Button>
                    <Button type="submit" onClick={router.back} disabled={!form.isValid()} style={{flex: 1}}>
                        Войти
                    </Button>
                </Group>
            </Rounded>
        </div>
    );
}