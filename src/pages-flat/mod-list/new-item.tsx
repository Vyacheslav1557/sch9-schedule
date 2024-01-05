'use client';

import React, {useState} from 'react';
import {ActionIcon, Group, Text} from "@mantine/core";
import style from "@src/pages-flat/class-list/style.module.css";
import {IconCheck, IconPlus} from "@tabler/icons-react";
import {v4 as uuid} from "uuid";
import {Moderator} from "@src/shared/api/mods";

const NewMod = ({add}: { add: (elem: Moderator) => void }) => {
    const [isOnAdd, setOnAdd] = useState(false);

    return (
        <Group className={style.class__item}
               justify={isOnAdd ? "space-between" : "center"}
               gap="0"
        >
            {!isOnAdd ?
                <>
                    <ActionIcon color="blue"
                                style={{width: "138px", height: "30px"}}
                                onClick={() => setOnAdd(true)}
                    >
                        <IconPlus/>
                    </ActionIcon>
                </> :
                <>
                    <Text fw={600}>
                        Moderator999
                    </Text>
                    <ActionIcon color="green"
                                style={{width: "138px", height: "30px"}}
                                onClick={() => {
                                    add({name: "newModerator", id: uuid()});
                                    setOnAdd(false)
                                }}
                    >
                        <IconCheck/>
                    </ActionIcon>
                </>
            }
        </Group>
    );
};

export {NewMod};