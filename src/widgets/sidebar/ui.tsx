'use client';
import React, {useState} from 'react';
import {Button, Combobox, Group, Input, InputBase, Modal, ScrollArea, Text, useCombobox} from "@mantine/core";
import {WeekPicker} from "../week-picker";
import "./style.css"
import {useDisclosure} from '@mantine/hooks';
import {Calendar} from "@mantine/dates";
import dayjs from "dayjs";

let classes = [
    "10 класс А",
    "10 класс Б",
    "10 класс В",
    "8 класс A",
    "8 класс Б",
    "8 класс В",
    "8 класс Г",
]

interface Item {
    value: string;
    description: string;
}

const data: Item[] = [];

for (let i = 0; i < classes.length; i++) {
    data.push({value: classes[i], description: "1 группа"})
    data.push({value: classes[i], description: "2 группа"})
}

function SelectOption({value, description}: Item) {
    return (
        <Group>
            <div>
                <Text fz="sm" fw={500}>
                    {value}
                </Text>
                <Text fz="xs" opacity={0.6}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

export function SelectOptionComponent() {
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            close();
        }
    });

    const [value, setValue] = useState<string | null>(null);
    const selectedOption = data.find((item) => item.value === value);
    const [opened, {open, close}] = useDisclosure(false);

    const options = data.map((item) => (
        <Combobox.Option value={item.value} key={item.value + item.description}>
            <SelectOption {...item} />
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            withinPortal={true}
            onOptionSubmit={(val) => {
                setValue(val);
                close();
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron/>}
                    onClick={() => {
                        open();
                        combobox.openDropdown();
                    }}
                    rightSectionPointerEvents="none"
                    multiline
                >
                    {selectedOption ? (
                        <SelectOption {...selectedOption} />
                    ) : (
                        <Input.Placeholder>Выбрать класс</Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>
            <Modal opened={opened}
                   onClose={close}
                   size={284}
                   transitionProps={{transition: 'rotate-left'}}
                   className="tablet-or-mobile"
            >
                <ScrollArea.Autosize type="scroll" mah={400}>
                    {options}
                </ScrollArea.Autosize>
            </Modal>
            <Combobox.Dropdown className="desktop">
                <ScrollArea.Autosize type="scroll" mah={260}>
                    {options}
                </ScrollArea.Autosize>
            </Combobox.Dropdown>
        </Combobox>
    );
}


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