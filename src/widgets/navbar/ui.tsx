import React from 'react';
import {Button, Stack} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";
import {Rounded} from "@src/shared/common";
import Link from "next/link";

const Navbar = () => {
    return (
        <Rounded style={{
            padding: "10px",
            height: "140px"
        }}>
            <Stack>
                <Button component={Link} href="/" leftSection={<IconHome/>} variant="subtle">
                    Главная
                </Button>
            </Stack>
        </Rounded>
    );
};

export {Navbar};