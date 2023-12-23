'use client';

import {Day} from "@src/shared/api";
import {Droppable} from "@hello-pangea/dnd";
import {Stack} from "@mantine/core";
import {DraggableSubjectCell} from "@src/widgets/schedule/cell";
import React from "react";

const DroppableDay = (day: (Day & { index: number })) => {
    return (
        <Droppable droppableId={day.index.toString()}>
            {(provided) => (
                <Stack gap={10}
                       style={{padding: "0 6px", borderRadius: "10px"}}
                       {...provided.droppableProps}
                       ref={provided.innerRef}
                >
                    {day.subjects.map((item, index) => (
                            <DraggableSubjectCell data={item}
                                                  key={index}
                                                  cell={{index, fullWidth: false}}
                            />
                        )
                    )
                    }
                    {provided.placeholder}
                </Stack>
            )}
        </Droppable>
    )
}

export {DroppableDay};