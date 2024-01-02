import {Day} from "@src/shared/api";
import React from "react";
import {DragDropContext, DropResult, OnDragEndResponder} from "@hello-pangea/dnd";
import {addToList, removeFromList} from "@src/widgets/schedule/week/droppable/lib";
import {Group} from "@mantine/core";
import {DroppableDay} from "@src/widgets/schedule/day";

const DroppableSchedule = (props: { day: Day, onClick: any, setDay: any, onCellClick: any}) => {
    const onDrugEnd = (result: DropResult): OnDragEndResponder | undefined => {
        const {destination, source} = result;

        if (!destination)
            return;

        if (destination.index === source.index)
            return;

        const dayCopy: Day = JSON.parse(JSON.stringify(props.day));
        const sourceList = dayCopy.subjects;
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            source.index
        );
        dayCopy.subjects = newSourceList;
        const destinationList = dayCopy.subjects;
        dayCopy.subjects = addToList(
            destinationList,
            destination.index,
            removedElement
        );

        props.setDay(dayCopy);
    }

    return (
        <DragDropContext onDragEnd={onDrugEnd}>
            <Group gap="0" align="flex-start">
                <DroppableDay day={props.day} onClick={props.onClick} onCellClick={props.onCellClick}/>
            </Group>
        </DragDropContext>
    );
};

export {DroppableSchedule};