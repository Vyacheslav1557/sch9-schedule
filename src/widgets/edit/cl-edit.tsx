'use client';

import React, {useMemo, useState} from 'react';
import {headers, Subject, Day, Gap, SchoolSubject} from "@src/shared/api";
import {
    Draggable,
    Droppable,
    DragDropContext,
    OnDragEndResponder,
    DropResult
} from "@hello-pangea/dnd";
import {ActionIcon, Button, Group, Stack} from "@mantine/core";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import "./style.css";

type Cell = {
    fullWidth?: boolean
    index: number
}

const Cell = (data: (Cell & Subject)) => {
    return (
        <Draggable draggableId={data.id} index={data.index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div style={{
                        width: data.fullWidth ? "100%" : "120px",
                        height: "60px",
                        backgroundColor: data.color,
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
                            <span className="cell">{data.title}</span>
                            {/*<Group style={{fontSize: "10px", justifyContent: "flex-start", gap: "4px"}}>*/}
                            {/*    <IconClock size="14px"/>*/}
                            {/*    <span>9:00-12:00</span>*/}
                            {/*</Group>*/}
                        </Stack>
                    </div>
                </div>
            )
            }
        </Draggable>
    );
}

const EmptyCell = (data: (Cell & Gap)) => {
    return (
        <Draggable draggableId={data.id} index={data.index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div style={{
                        width: "120px",
                        height: "60px",
                        backgroundColor: "transparent"
                    }}/>
                </div>
            )
            }
        </Draggable>
    )
}

function isEmpty(sub: Subject | Gap): sub is Gap {
    return (sub as Subject).empty;
}

const DayW = (day: Day) => {
    return (
        <Droppable droppableId={day.id}>
            {(provided) => (
                <Stack gap={10} style={{
                    padding: "10px",
                    borderRadius: "10px"
                }} {...provided.droppableProps} ref={provided.innerRef}>
                    {day.subjects.map((item, index) => {
                            return (
                                isEmpty(item) ?
                                    <EmptyCell key={index}
                                               {...item}
                                               index={index}/>
                                    :
                                    <Cell key={index}
                                          {...item}
                                          index={index}/>
                            )
                        }
                    )
                    }
                    {provided.placeholder}
                </Stack>
            )}
        </Droppable>
    )
}

const DNDSchedule = (props: { week: Day[] }) => {

    const [week, setWeek] = useState<Day[]>(props.week);

    const onDrugEnd = (result: DropResult): OnDragEndResponder | undefined => {
        const {destination, source, draggableId} = result;

        if (!destination)
            return;

        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return;

        const sourceColumnIndex = week.findIndex((day) => day.id === source.droppableId);
        const sourceColumn = week[sourceColumnIndex];
        if (!sourceColumn)
            return;

        const destinationColumnIndex = week.findIndex((day) => day.id === destination.droppableId);
        const destinationColumn = week[destinationColumnIndex];
        if (!destinationColumn)
            return;

        const movable = sourceColumn.subjects.find((sub) => sub.id === draggableId);
        if (!movable)
            return;


        let newSourceSubjects = Array.from(sourceColumn.subjects);
        let newDestinationSubjects = Array.from(destinationColumn.subjects);
        if (source.droppableId == destination.droppableId) {
            newDestinationSubjects.splice(source.index, 1);
            if (source.index < destination.index) {
                newDestinationSubjects.splice(destination.index - 1, 0, movable);
            } else {
                newDestinationSubjects.splice(destination.index, 0, movable);
            }
        } else {
            newDestinationSubjects.splice(destination.index, 0, movable);
            newSourceSubjects.splice(source.index, 1);
        }

        const newWeek = Array.from(week);
        newWeek[sourceColumnIndex].subjects = newSourceSubjects;
        newWeek[destinationColumnIndex].subjects = newDestinationSubjects;
        setWeek(newWeek);
    }

    return (
        <DragDropContext onDragEnd={onDrugEnd}>
            <Group gap={0} align="flex-start">
                {week.map((item) => <DayW {...item} key={item.id}/>)}
            </Group>
        </DragDropContext>
    );
};


export {DNDSchedule};