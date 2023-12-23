'use client';

import {Button, PasswordInput, TextInput,} from '@mantine/core';
import {Rounded} from "@src/shared/common";
import {useRouter} from "next/navigation";

export default () => {
    const router = useRouter()

    return (
        <Rounded style={{
            width: 420,
            margin: "40px auto",
            padding: 20
        }}>
            <TextInput label="Логин" placeholder="moderator4517" required/>
            <PasswordInput label="Пароль" placeholder="password" required mt="md"/>
            <Button fullWidth mt="xl" onClick={router.back}>
                Войти
            </Button>
        </Rounded>
    );
}