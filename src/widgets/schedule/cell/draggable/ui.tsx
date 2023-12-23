'use client';

import {SchoolSubject} from "@src/shared/api";
import {Cell} from "@src/widgets/schedule/cell";
import {Draggable} from "@hello-pangea/dnd";
import React from "react";
import {SubjectCell} from "../simple";

const DraggableSubjectCell = ({data, cell}: { data: SchoolSubject, cell: Cell }) => {
    return (
        <Draggable draggableId={data.id} index={cell.index} key={data.id}>
            {(provided) => (
                <div ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <SubjectCell data={data} cell={cell}/>
                </div>
            )}
        </Draggable>
    )
}

export {DraggableSubjectCell};