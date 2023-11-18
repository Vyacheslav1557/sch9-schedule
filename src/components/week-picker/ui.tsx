'use client'
import {useState} from 'react';
import {Calendar} from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

function getDay(date: Date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - getDay(date) - 1);
}

function endOfWeek(date: Date) {
    return dayjs(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - getDay(date))))
        .endOf('date')
        .toDate();
}

function isInWeekRange(date: Date, value: Date | null) {
    return value
        ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
        : false;
}

const WeekPicker = () => {
    const [hovered, setHovered] = useState<Date | null>(null);
    const [value, setValue] = useState<Date | null>(null);

    return (
        <Calendar
            withCellSpacing={false}
            locale="ru"
            getDayProps={(date) => {
                const isHovered = isInWeekRange(date, hovered);
                const isSelected = isInWeekRange(date, value);
                const isInRange = isHovered || isSelected;
                return {
                    onMouseEnter: () => setHovered(date),
                    onMouseLeave: () => setHovered(null),
                    inRange: isInRange,
                    firstInRange: isInRange && date.getDay() === 1,
                    lastInRange: isInRange && date.getDay() === 0,
                    selected: isSelected,
                    onClick: () => setValue(date),
                };
            }}
        />
    );
}

export {WeekPicker}