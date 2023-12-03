import React from 'react';
import {Stack, Group, Button, ActionIcon} from "@mantine/core";
import "./style.css"
import {IconChevronLeft, IconChevronRight, IconClock} from "@tabler/icons-react";
import {time, week, headers, Day, EmptySubject, Subject} from "@src/shared/api";

interface ICell {
    text: string
    color?: string
    fullWidth?: boolean
}

const Cell = ({text, color, fullWidth}: ICell) => {
    return (
        <div>
            <div style={{
                width: fullWidth ? "100%" : "120px",
                height: "60px",
                backgroundColor: color,
                borderRadius: "6px 10px 10px 6px",
                paddingLeft: "6px"
            }}>
                <Stack style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#E9EFFF",
                    padding: "6px",
                    justifyContent: "space-evenly",
                    gap: "0px"
                }}>
                    <span className="cell">{text}</span>
                    {/*<Group style={{fontSize: "10px", justifyContent: "flex-start", gap: "4px"}}>*/}
                    {/*    <IconClock size="14px"/>*/}
                    {/*    <span>9:00-12:00</span>*/}
                    {/*</Group>*/}
                </Stack>
            </div>
        </div>
    );
}


const WeekNav = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "4px"
        }}>
            <ActionIcon className="day" size={36} px={0}><IconChevronLeft/></ActionIcon>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: "2px"
            }}>
                {headers.map((item, index) => (
                    <div style={{
                        fontWeight: 600,
                        display: "inline",
                        borderRadius: "6px",
                        textAlign: "center",
                    }} key={index}>
                        <Button className={index === 0 ? "day-selected" : "day"}>
                            <pre style={{margin: 0}}>{item}</pre>
                        </Button>
                    </div>
                ))}
            </div>
            <ActionIcon className="day" size={36} px={0}><IconChevronRight/></ActionIcon>
        </div>
    )
}

const EmptyCell = () => {
    return (
        <div>
            <div style={{
                width: "120px",
                height: "60px",
                backgroundColor: "transparent"
            }}/>
        </div>
    )
}

function isEmpty(sub: Subject | EmptySubject): sub is EmptySubject {
    return (sub as Subject).name === undefined;
}

const Day = (day: Day & {fullWidth?:boolean}) => {
    return (
        <Stack gap={0} style={{
            width: day.fullWidth ? "calc(100% - 50px)" : ""
        }}>
            {day.subjects.map((item, index) => {
                    return (
                        isEmpty(item) ?
                            <EmptyCell key={index}/>
                            :
                            <Cell key={index} text={item.name} color={item.color} fullWidth={day.fullWidth}/>
                    )
                }
            )
            }
        </Stack>
    )
}

const TimeCol = () => {
    return (
        <Stack style={{
            height: "100%",
            gap: 0,
            justifyContent: "space-around"
        }}>
            {time.map((item, index) => (
                <div key={index}>
                    <div style={{
                        height: "60px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <pre>{item}</pre>
                    </div>
                </div>
            ))}
        </Stack>
    )
}

const Schedule = () => {
    return (
        <div className="rounded schedule__wrapper" style={{
            fontWeight: 500,
        }}>
            <Stack className="small">
                <WeekNav/>
                <Group className="schedule-day" gap={0}>
                    <TimeCol/>
                    <Day date={week[0].date} subjects={week[0].subjects} fullWidth/>
                </Group>
            </Stack>
            <Group gap={12} className="big">
                <div>
                    <div style={{
                        height: "60px",
                        textAlign: "center",
                        display: "flex",
                        width: "40px",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <pre/>
                    </div>
                </div>
                {
                    week.map((item, index) => (
                        <div key={index}>
                            <div style={{
                                width: "120px",
                                height: "60px",
                                textAlign: "center"
                            }}>
                                <pre>{item.date}</pre>
                            </div>
                        </div>
                    ))
                }
            </Group>
            <Group style={{
                gap: 0,
                alignItems: "flex-start"
            }} className="schedule-day big">
                <TimeCol/>
                {week.map((item, index) => (
                    <Day key={index} subjects={item.subjects} date={item.date}/>
                ))}
            </Group>
        </div>
    );
};

export {Schedule};