'use client';

import React from 'react';
import {Button, Stack} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";
import {Rounded} from "@src/shared/common";
import {useRouter} from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    return (
        <Rounded style={{
            padding: "10px",
            height: "140px"
        }}>
            <Stack>
                <Button leftSection={<IconHome/>} variant="subtle" onClick={() => router.push("/")}>
                    Главная
                </Button>
            </Stack>
        </Rounded>
    );
};

export {Navbar};