'use client';

import React, {useState} from "react";
import {IconCheck, IconEye, IconPencil, IconTrash, IconUsersGroup} from "@tabler/icons-react";
import {ActionIcon, Divider, Group, Text, TextInput} from "@mantine/core";
import {Item} from "@src/shared/api";
import style from "@src/pages-flat/class-list/style.module.css";
import {useDisclosure} from "@mantine/hooks";

const ClassItem = ({item, isLast}: { item: Item, isLast: boolean }) => {
    const [isOnInput, {open, close, toggle}] = useDisclosure(false);
    const [classTitle, setClassTitle] = useState(item.value);

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
                    <ActionIcon component="a" href="/admin/mod" color="orange" size="30px">
                        <IconUsersGroup/>
                    </ActionIcon>
                    <ActionIcon color="yellow" size="30px">
                        <IconEye/>
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

export {ClassItem};