'use client';

import React, {useState} from "react";
import {IconCheck, IconEye, IconLock, IconPencil, IconTrash, IconUsersGroup} from "@tabler/icons-react";
import {ActionIcon, Divider, Group, Text, TextInput} from "@mantine/core";
import Link from "next/link";
import style from "@src/pages-flat/class-list/style.module.css";
import {useDisclosure} from "@mantine/hooks";
import {Moderator} from "@src/shared/api/mods";

const ModItem = ({item, isLast}: { item: Moderator, isLast: boolean }) => {
    const [isOnInput, {open, close, toggle}] = useDisclosure(false);
    const [classTitle, setClassTitle] = useState(item.name);

    return (
        <>
            <Group className={style.class__item}
                   justify="space-between"
                   gap="0"
            >
                {isOnInput ?
                    <TextInput size="16px" fw={600}
                               classNames={{input: style.text_input__input}}
                               value={classTitle}
                               onChange={(event) => setClassTitle(event.currentTarget.value)}
                    /> :
                    <Text size="16px" fw={600}>
                        {classTitle}
                    </Text>
                }
                <Group gap={6}>
                    {isOnInput ?
                        <ActionIcon color="green" size="30px" onClick={close}>
                            <IconCheck/>
                        </ActionIcon> :
                        <ActionIcon color="blue" size="30px" onClick={open}>
                            <IconPencil/>
                        </ActionIcon>
                    }
                    <ActionIcon color="yellow" size="30px">
                        <IconLock/>
                    </ActionIcon>
                    <ActionIcon color="red" size="30px">
                        <IconTrash/>
                    </ActionIcon>
                </Group>
            </Group>
            {isLast ? <></> : <Divider/>}
        </>
    )
};

export {ModItem};