'use client';

import {Day} from "@src/shared/api";
import React, {useState} from "react";
import {DragDropContext, DropResult, OnDragEndResponder} from "@hello-pangea/dnd";
import {addToList, removeFromList} from "@src/widgets/schedule/week/droppable/lib";
import {Group} from "@mantine/core";
import {DroppableDay} from "@src/widgets/schedule/day";

const DroppableSchedule = (props: { week: Day[] }) => {
    const [week, setWeek] = useState<Day[]>(props.week);

    const onDrugEnd = (result: DropResult): OnDragEndResponder | undefined => {
        const {destination, source} = result;

        if (!destination)
            return;

        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return;

        const weekCopy: Day[] = JSON.parse(JSON.stringify(week));
        const sourceList = weekCopy[+source.droppableId].subjects;
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            source.index
        );
        weekCopy[+result.source.droppableId].subjects = newSourceList;
        const destinationList = weekCopy[+destination.droppableId].subjects;
        weekCopy[+destination.droppableId].subjects = addToList(
            destinationList,
            destination.index,
            removedElement
        );

        setWeek(weekCopy);
    }

    return (
        <DragDropContext onDragEnd={onDrugEnd}>
            <Group gap="0" align="flex-start">
                {week.map((day, index) => <DroppableDay {...day} key={day.id} index={index}/>)}
            </Group>
        </DragDropContext>
    );
};

export {DroppableSchedule};