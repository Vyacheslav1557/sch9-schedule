'use client';

import {Button, PasswordInput, TextInput,} from '@mantine/core';
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
                <Button type="submit" fullWidth mt="md" onClick={router.back} disabled={!form.isValid()}>
                    Войти
                </Button>
            </Rounded>
        </div>
    );
}