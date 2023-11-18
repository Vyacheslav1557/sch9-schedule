'use client'
import React from 'react';
import {Button, Modal, Select} from "@mantine/core";
import {WeekPicker} from "@/src/components/week-picker";
import "./style.css"
import {useDisclosure, useMediaQuery} from '@mantine/hooks';

let classes = [
    "10 класс В",
    "8 класс A",
    "8 класс Б",
    "8 класс В",
    "8 класс Г",
]

const data: string[] = [];

for (let i = 0; i < classes.length; i++) {
    data.push(classes[i] + " - 1 группа")
    data.push(classes[i] + " - 2 группа")
}

const SideBar = () => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <aside className="sidebar">
            <div className="desktop">
                <div className="rounded" style={{padding: "10px"}}>
                    <WeekPicker/>
                </div>
            </div>
            <div className="tablet-or-mobile">
                <Modal
                    opened={opened}
                    onClose={close}
                    transitionProps={{transition: 'rotate-left'}}
                    size="auto"
                    py={100}
                >
                    <WeekPicker/>
                </Modal>

                <Button onClick={open} variant="default" radius={6}>Выбрать дату</Button>
            </div>
            <Select
                placeholder="Выбрать класс"
                data={data}
                radius={"6px"}
                style={{fontWeight: "600"}}
            />
        </aside>
    );
};

export {SideBar};