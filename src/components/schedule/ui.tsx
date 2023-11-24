import React from 'react';
import {Stack, Group, Button, ActionIcon} from "@mantine/core";
import "./style.css"
import {IconChevronLeft, IconChevronRight, IconClock} from "@tabler/icons-react";

const headers = [
    "14\nПН",
    "15\nВТ",
    "16\nСР",
    "17\nЧТ",
    "18\nПТ",
    "19\nСБ",
    "20\nВС",
]

const time = [
    "08:10\n08:50",
    "09:05\n09:45",
    "10:00\n10:40",
    "11:00\n11:40",
    "12:00\n12:40",
    "12:50\n13:30",
    "13:35\n14:15",
]

interface ICell {
    text: string
    color: string
    fullwidth: boolean
}

const Cell = ({text, color, fullwidth}: ICell) => {
    const w = fullwidth ? "100%" : "120px"

    return (
        <div style={{
            width: w,
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

const Schedule = () => {
    const getTable = () => {
        let content = [];
        for (let i = 0; i < time.length; i++) {
            content.push(
                <tr key={time.length + i} style={{fontWeight: 500}}>
                    <td style={{textAlign: "center"}}>
                        <span style={{width: "40px"}}><pre style={{margin: 0}}>{time[i]}</pre></span>
                    </td>
                    <td className="small">
                        <Cell text='Классные часы "Разговоры о важном"' color="#5272E9" fullwidth/>
                    </td>
                    <td className="big">
                        <Cell text='Классные часы "Разговоры о важном"' color="#5272E9" fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Физика" color="#52BCE9" fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Английский язык" color="#E952D1" fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Алгебра и начала математического анализа" color="#E98852"
                              fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Геометрия" color="#43DC40" fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Физическая культура" color="#E9525B" fullwidth={false}/>
                    </td>
                    <td className="big">
                        <Cell text="Русский язык" color="#7500EA" fullwidth={false}/>
                    </td>
                </tr>
            )
        }
        return content;
    };

    return (
        <div className="rounded schedule__wrapper">
            <div className="small">
                <WeekNav/>
            </div>
            <table style={{
                width: "100%",
                height: "100%",
                borderSpacing: "10px",
                borderCollapse: "collapse",
            }} className="schedule">
                <thead>
                <tr className="big" style={{textAlign: "center", width: "100%"}}>
                    <th></th>
                    {headers.map((item, index) => (
                        <th style={{fontWeight: 600}} key={index}>
                            <span><pre style={{margin: 0}}>{item}</pre></span>
                        </th>
                    ))}

                </tr>
                </thead>
                <tbody>
                {getTable()}
                </tbody>
            </table>
        </div>
    );
};

export {Schedule};