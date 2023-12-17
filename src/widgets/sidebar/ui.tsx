'use client';
import React, {useState} from 'react';
import {Button, Modal} from "@mantine/core";
import {WeekPicker} from "@src/widgets/week-picker";
import style from "./style.module.css"
import {useDisclosure} from '@mantine/hooks';
import {Calendar} from "@mantine/dates";
import dayjs from "dayjs";
import {SelectOptionComponent} from "@src/widgets/custom-select";
import {Rounded} from "@src/shared/common";


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
        <aside className={style.sidebar}>
            <Rounded style={{padding: "10px"}}>
                <WeekPicker/>
            </Rounded>
            <SelectOptionComponent/>
            {/*<div className="tablet-or-mobile">*/}
            {/*    <Modal*/}
            {/*        opened={opened}*/}
            {/*        onClose={close}*/}
            {/*        transitionProps={{transition: 'rotate-left'}}*/}
            {/*        size="auto"*/}
            {/*    >*/}
            {/*        <div className="small"><DayPicker/></div>*/}
            {/*        <div className="big"><WeekPicker/></div>*/}
            {/*    </Modal>*/}
            {/*    <Button onClick={open} variant="default" radius={6}>Выбрать дату</Button>*/}
            {/*</div>*/}
            {/*<div className="tablet-or-mobile" style={{width: "180px"}}>*/}
            {/*    <SelectOptionComponent/>*/}
            {/*</div>*/}
        </aside>
    );
};

export {SideBar};