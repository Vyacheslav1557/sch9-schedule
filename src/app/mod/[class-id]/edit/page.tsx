'use client';

import style from "./style.module.css";
import {ActionIcon, Button, ColorPicker, DEFAULT_THEME, Group, SimpleGrid, Stack, Text, Textarea} from "@mantine/core";
import {Rounded} from "@src/shared/common";
import React, {ChangeEvent, useState} from "react";
import {Temp, uniqueSubjects} from "@src/shared/api/subjects/api";
import {IconPlus, IconTrash} from "@tabler/icons-react";
import {Navbar} from "@src/widgets/navbar";


const COLOR_ARRAY: string[] = [];

for (const colorKey in DEFAULT_THEME.colors) {
    for (const color of DEFAULT_THEME.colors[colorKey]) {
        // console.log(color);
        COLOR_ARRAY.push(color);
    }
}

const EditableCell = (props: {
    tmp: Temp,
    index: number,
    chosen: number,
    onClick: (i: number) => void
}) => {
    return (
        <div
            className={props.chosen === props.index ? `${style.cell} ${style.chosen}` : style.cell}
            style={{
                backgroundColor: props.tmp.color
            }}
            onClick={(e) => props.onClick(props.index)}
        >
            <Stack className={style.cell__content}>
                <span className={style.cell__title}>{props.tmp.title}</span>
                {/*    <Group style={{fontSize: "10px", justifyContent: "flex-start", gap: "4px"}}>*/}
                {/*        <IconClock size="14px"/>*/}
                {/*        <span>9:00-12:00</span>*/}
                {/*    </Group>*/}
            </Stack>
        </div>
    )
}

const AddNewSubject = ({onClick}: { onClick: () => void }) => {
    return (
        <div className={style.new} onClick={onClick}>
            <IconPlus className={style.plus}/>
        </div>
    )
}

export default () => {
    const [chosen, setChosen] = useState(0);
    const [unique, setUnique] = useState(uniqueSubjects);

    const [changed, setChanged] = useState(false);

    const setValue = (name: string) => {
        const copy = [...unique]
        copy[chosen].color = name;
        setUnique(copy);
        setChanged(true);
    }

    const setName = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const copy = [...unique]
        copy[chosen].title = e.currentTarget.value;
        setUnique(copy);

        setChanged(true);
    }

    const onClick = () => {
        const copy = [...unique]
        copy.push({title: "Новый предмет", color: "#fff"})
        setUnique(copy);
        setChosen(copy.length - 1);
        setChanged(true);
    }

    const Remove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let copy = [...unique]
        copy.splice(chosen, 1);
        setUnique(copy);
        setChosen(0);
        setChanged(true);
    }

    return (
        <div className={style.wrapper}>
            <Group align="flex-start" justify="center">
                <Navbar/>
                <Rounded style={{
                    padding: "10px",
                    width: "460px",
                    height: "max-content"
                }}>
                    <SimpleGrid cols={3} verticalSpacing="5px" style={{
                        gridAutoRows: "70px"
                    }}>
                        {unique.map((item, index) => (
                            <EditableCell tmp={item}
                                          key={index}
                                          index={index}
                                          chosen={chosen}
                                          onClick={setChosen}/>
                        ))}
                        <AddNewSubject onClick={onClick}/>
                    </SimpleGrid>
                </Rounded>
                <Rounded style={{
                    padding: "10px",
                    width: "260px"
                }}>
                    {unique.length != 0 ?

                        <Stack>
                            <div>
                                <Group justify="space-between">
                                    <Text>
                                        Название предмета
                                    </Text>
                                    <ActionIcon onClick={Remove} style={{
                                        backgroundColor: "transparent"
                                    }}>
                                        <IconTrash color="red"/>
                                    </ActionIcon>
                                </Group>
                                <Textarea value={unique[chosen].title} mt="xs" onChange={setName} maxLength={100}/>
                            </div>
                            <div>
                                <Text>
                                    Цвет
                                </Text>
                                <ColorPicker swatchesPerRow={10}
                                             size="md"
                                             mt="xs"
                                             swatches={COLOR_ARRAY}
                                             onChange={setValue}
                                             value={unique[chosen].color}
                                />
                            </div>
                        </Stack>
                        :
                        <span>Чтобы изменить цвет или название, добавьте хоть один предмет</span>
                    }
                </Rounded>
                <Stack>
                    <Button variant="filled" color="red" disabled={!changed}>
                        Отменить
                    </Button>
                    <Button disabled={!changed}>
                        Сохранить
                    </Button>
                </Stack>
            </Group>
        </div>
    );
};
