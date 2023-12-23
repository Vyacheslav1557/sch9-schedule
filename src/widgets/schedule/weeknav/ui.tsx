import React from "react";
import {ActionIcon, Button} from "@mantine/core";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";

import {headers} from "@src/shared/api";

import style from "./style.module.css";

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
                        <Button className={index === 0 ? style.selected : style.day}>
                            <pre style={{margin: 0}}>{item}</pre>
                        </Button>
                    </div>
                ))}
            </div>
            <ActionIcon className={style.day} size={36} px={0}><IconChevronRight/></ActionIcon>
        </div>
    )
}

export {WeekNav};