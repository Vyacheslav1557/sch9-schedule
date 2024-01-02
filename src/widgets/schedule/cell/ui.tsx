import {SchoolSubject} from "@src/shared/api";
import {Cell} from "./types";
import {isEmpty} from "@src/widgets/schedule/cell/lib";
import style from "./style.module.css";
import {Stack} from "@mantine/core";
import React from "react";

const SubjectCell = ({data, cell}: {
    data: SchoolSubject,
    cell: Cell
}) => {
    return (
        isEmpty(data) ?
            <div className={style.cell__empty}/>
            :
            <div
                className={style.cell}
                style={{
                    backgroundColor: data.color,
                    width: cell.fullWidth ? "100%" : "120px"
                }}
            >
                <Stack className={style.cell__content}>
                    <span className={style.cell__title}>{data.title}</span>
                    {/*    <Group style={{fontSize: "10px", justifyContent: "flex-start", gap: "4px"}}>*/}
                    {/*        <IconClock size="14px"/>*/}
                    {/*        <span>9:00-12:00</span>*/}
                    {/*    </Group>*/}
                </Stack>
            </div>
    );
}

export {SubjectCell};