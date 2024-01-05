'use client'

import React, {useState} from 'react';
import {ActionIcon, Button, Group, Stack, Textarea, Title} from "@mantine/core";
import style from "./common/style.module.css"
import {Day, SchoolSubject, time} from "@src/shared/api";
import {Rounded} from "@src/shared/common";
import {SimpleSchedule} from "@src/widgets/schedule/week/simple/ui";
import {DroppableSchedule} from "@src/widgets/schedule/week/droppable";
import {v4 as uuidv4} from "uuid";
import {IconTrash} from "@tabler/icons-react";

const ScheduleView = (props: { week: Day[] }) => {
    return (
        <Rounded className={style.schedule__wrapper} style={{fontWeight: 500}}>
            <Group gap="12px">
                <div style={{height: "60px", width: "40px"}}/>
                {props.week.map((day, index) => (
                    <div key={index}
                         style={{
                             width: "120px",
                             height: "60px",
                             textAlign: "center"
                         }}>
                        <pre>{day.date}</pre>
                    </div>
                ))}
            </Group>
            <Group gap="0" style={{alignItems: "flex-start"}}>
                <Stack h="100%" justify="space-around" pr="6px" gap="10px">
                    {time.map((item, index) => (
                        <div key={index}>
                            <Stack h="60px" justify="center" style={{textAlign: "center"}}>
                                <pre>{item}</pre>
                            </Stack>
                        </div>
                    ))}
                </Stack>
                <SimpleSchedule week={props.week}/>
            </Group>
        </Rounded>
    );
};

const ScheduleEdit = (props: { day: Day }) => {
    const [chosen, setChosen] = useState<SchoolSubject | null>(null);

    const [day, setDay] = useState(props.day);

    const onClick = (props: { empty: false, title: string, color: string } | { empty: true }) => {
        const dayCopy: Day = JSON.parse(JSON.stringify(day));

        dayCopy.subjects.push({...props, id: uuidv4()})
        setDay(dayCopy);
    }

    const onCellClick = (id: string) => {
        const subject = day.subjects.find((item) => item.id === id)
        if (!subject)
            return;
        if (chosen?.id === id){
            setChosen(null);
            return;
        }

        setChosen(subject);
    }

    const Remove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!chosen)
            return;
        const dayCopy: Day = JSON.parse(JSON.stringify(day));
        dayCopy.subjects.splice(dayCopy.subjects.findIndex((item) => item.id === chosen.id), 1);
        setChosen(null);
        setDay(dayCopy);
    }

    return (
        <Rounded className={style.schedule__wrapper} style={chosen ? {width: "500px"} : {width: "200px"}}>
            <Group gap="12px">
                <div style={{height: "60px", width: "40px"}}/>
                <div style={{
                    width: "120px",
                    height: "60px",
                    textAlign: "center"
                }}>
                    <pre>{props.day.date}</pre>
                </div>
            </Group>
            <Group gap="0" style={{alignItems: "flex-start"}}>
                <Stack h="100%" justify="space-around" pr="6px" gap="10px">
                    {time.map((item, index) => (
                        <div key={index}>
                            <Stack h="60px" justify="center" style={{textAlign: "center"}}>
                                <pre>{item}</pre>
                            </Stack>
                        </div>
                    ))}
                </Stack>
                <DroppableSchedule day={day} onClick={onClick} setDay={setDay} onCellClick={onCellClick}/>
                {chosen ?
                    <Stack style={{width: "290px", marginLeft: "8px"}}>
                        <Group align="flex-start" gap="0">
                            <Title size={26} style={{width: "80%"}}>{!chosen.empty ? chosen.title : "Окно"}</Title>
                            <ActionIcon onClick={Remove} style={{
                                backgroundColor: "transparent",
                                width: "20%"
                            }}>
                                <IconTrash color="red"/>
                            </ActionIcon>
                        </Group>
                        {!chosen.empty ?
                            <>
                                <Textarea label="Домашнее задание"></Textarea>
                            </>
                            :
                            <></>}
                    </Stack>
                    :
                    <></>
                }
            </Group>
        </Rounded>
    );
}

export {ScheduleView, ScheduleEdit};