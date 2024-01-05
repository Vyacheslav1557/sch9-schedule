'use client';

import React, {useState} from "react";
import dayjs from "dayjs";
import {Calendar} from "@mantine/dates";

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

export {DayPicker};