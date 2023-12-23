import {Day} from "@src/shared/api";
import {Stack} from "@mantine/core";
import {SubjectCell} from "@src/widgets/schedule/cell";
import React from "react";

const SimpleDay = (day: (Day & { index: number })) => {
    return (
        <Stack gap={10} style={{padding: "0 6px", borderRadius: "10px"}}>
            {day.subjects.map((item, index) => (
                    <SubjectCell data={item}
                                 key={index}
                                 cell={{index, fullWidth: false}}
                    />
                )
            )}
        </Stack>
    )
}

export {SimpleDay};