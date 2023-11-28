'use client';
import React, {useState} from 'react';
import {Button, Modal} from "@mantine/core";
import {WeekPicker} from "@src/widgets/week-picker";
import "./style.css"
import {useDisclosure} from '@mantine/hooks';
import {Calendar} from "@mantine/dates";
import dayjs from "dayjs";
import {SelectOptionComponent} from "@src/widgets/custom-select";


const DayPicker = () => {
    const [selected, setSelected] = useState<Date>();
    const handleSelect = (date: Date) => {
        const isSelected = dayjs(date).isSame(selected, 'date');
        if (!isSelected) {
            setSelected(date);
        }
    };

    return (
        <Calendar
            locale="ru"
            getDayProps={(date) => ({
                selected: dayjs(date).isSame(selected, 'date'),
                onClick: () => handleSelect(date),
            })}
        />
    )
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
            <div className="desktop">
                <SelectOptionComponent/>
            </div>
            <div className="tablet-or-mobile">
                <Modal
                    opened={opened}
                    onClose={close}
                    transitionProps={{transition: 'rotate-left'}}
                    size="auto"
                >
                    <div className="small"><DayPicker/></div>
                    <div className="big"><WeekPicker/></div>
                </Modal>
                <Button onClick={open} variant="default" radius={6}>Выбрать дату</Button>
            </div>
            <div className="tablet-or-mobile" style={{width: "180px"}}>
                <SelectOptionComponent/>
            </div>
        </aside>
    );
};

export {SideBar};