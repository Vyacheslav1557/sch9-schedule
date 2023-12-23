import {Day} from "@src/shared/api";
import {Group} from "@mantine/core";
import {SimpleDay} from "@src/widgets/schedule/day";
import React from "react";

const SimpleSchedule = (props: { week: Day[] }) => {
    return (
        <Group gap="0" align="flex-start">
            {props.week.map((day, index) => <SimpleDay {...day} key={day.id} index={index}/>)}
        </Group>
    );
}

export {SimpleSchedule};