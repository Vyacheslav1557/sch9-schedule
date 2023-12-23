import React from 'react';
import {Group, Stack} from "@mantine/core";
import style from "./common/style.module.css"
import {Day, time} from "@src/shared/api";
import {Rounded} from "@src/shared/common";
import {DroppableSchedule} from "@src/widgets/schedule/week/droppable/ui";
import {SimpleSchedule} from "@src/widgets/schedule/week/simple/ui";


const Schedule = (props: { week: Day[], draggable?: boolean }) => {
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
                {props.draggable ?
                    <DroppableSchedule week={props.week}/>
                    :
                    <SimpleSchedule week={props.week}/>
                }
            </Group>
        </Rounded>
    );
};

export {Schedule};