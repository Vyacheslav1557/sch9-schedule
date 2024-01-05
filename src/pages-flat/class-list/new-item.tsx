'use client';

import React, {useState} from 'react';
import {ActionIcon, Group, TextInput} from "@mantine/core";
import style from "@src/pages-flat/class-list/style.module.css";
import {IconCheck, IconPlus} from "@tabler/icons-react";
import {Item} from "@src/shared/api";
import {v4 as uuid} from "uuid";

const NewItem = ({add}: { add: (elem: Item) => void }) => {
    const [isOnInput, setOnInput] = useState(false);
    const [classTitle, setClassTitle] = useState("");

    return (
        <Group className={style.class__item}
               justify="space-between"
               gap="0"
        >
            {isOnInput ?
                <TextInput size="16px" fw={600}
                           classNames={{input: style.text_input__input}}
                           onChange={(event) => setClassTitle(event.currentTarget.value)}
                /> :
                <br/>
            }
            {!isOnInput ?
                <ActionIcon color="blue"
                            style={{width: "138px", height: "30px"}}
                            onClick={() => setOnInput(true)}
                >
                    <IconPlus/>
                </ActionIcon> :
                <ActionIcon color="green"
                            style={{width: "138px", height: "30px"}}
                            onClick={() => {setOnInput(false); add({value: classTitle, id: uuid()})}}
                >
                    <IconCheck/>
                </ActionIcon>
            }
        </Group>
    );
};

export {NewItem};