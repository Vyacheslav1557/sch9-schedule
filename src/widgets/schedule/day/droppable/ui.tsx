'use client';

import {Day} from "@src/shared/api";
import {Draggable, Droppable} from "@hello-pangea/dnd";
import {Modal, SimpleGrid, Stack} from "@mantine/core";
import {SubjectCell} from "@src/widgets/schedule/cell";
import React from "react";
import style from "@src/app/mod/[class-id]/edit/style.module.css";
import {IconPlus} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import {uniqueSubjects} from "@src/shared/api/subjects/api";
import style2 from "../common/style.module.css"

const AddNewSubject = (props: { onClick: any }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <div className={style.new} onClick={open}>
                <IconPlus className={style.plus}/>
            </div>
            <Modal opened={opened} onClose={close}>
                <SimpleGrid cols={3} verticalSpacing="5px" style={{
                    gridAutoRows: "70px"
                }}>
                    {uniqueSubjects.map((item, index) => (
                        <div key={index}
                             onClick={() => {props.onClick({
                                 color: item.color,
                                 empty: false,
                                 title: item.title
                             }); close()}}
                             className={style2.cell}
                        >
                            <SubjectCell
                                data={{
                                    color: item.color,
                                    empty: false,
                                    title: item.title,
                                    id: ""
                                }}
                                cell={{
                                    index: index,
                                    fullWidth: false
                                }}
                            />
                        </div>
                    ))}
                    <div onClick={() => {props.onClick({empty: true}); close()}} className={style2.cell}>
                        <SubjectCell data={{empty: true, id: ""}}
                                     cell={{index: -1, fullWidth: false}}
                        />
                    </div>
                </SimpleGrid>
            </Modal>
        </>
    )
}

const DroppableDay = (props: { day: Day, onClick: any, onCellClick: any }) => {
    return (
        <Droppable droppableId={props.day.id}>
            {(provided) => (
                <Stack gap={10}
                       style={{padding: "0 6px", borderRadius: "10px"}}
                       {...provided.droppableProps}
                       ref={provided.innerRef}
                >
                    {props.day.subjects.map((item, index) => (
                            <Draggable draggableId={item.id} index={index} key={item.id}>
                                {(provided) => (
                                    <div ref={provided.innerRef}
                                         {...provided.draggableProps}
                                         {...provided.dragHandleProps}
                                        onClick={() => props.onCellClick(item.id)}
                                    >
                                        <SubjectCell data={item}
                                                     cell={{index, fullWidth: false}}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        )
                    )}
                    {provided.placeholder}
                    <AddNewSubject onClick={props.onClick}/>
                </Stack>
            )}
        </Droppable>
    )
}

export {DroppableDay};