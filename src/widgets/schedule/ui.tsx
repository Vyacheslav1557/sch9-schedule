'use client';

import React, {useState} from 'react';
import {ActionIcon, Button, Group, Stack} from "@mantine/core";
import style from "./style.module.css"
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import {Day, Gap, headers, SchoolSubject, Subject, time} from "@src/shared/api";
import {DragDropContext, Draggable, Droppable, DropResult, OnDragEndResponder} from "@hello-pangea/dnd";
import {Rounded} from "@src/shared/common";


// TODO: нормально зарефакторить
// TODO: интерфейс Cell
// TODO: добавить календарь и выбор класса
// TODO: время и дата
// TODO: кнопка включения редактирования (управление через контекст)


type Cell = {
    fullWidth?: boolean
    index: number
}

// <div
//     style={{
//         backgroundColor: "red",
//         width: data.fullWidth ? "100%" : "120px"
//     }}
//     ref={provided.innerRef}
//     className={style.cell}
//     {...provided.draggableProps}
//     {...provided.dragHandleProps}
// >
//     <Stack className={style.cell__content}>
//         <span className={style.cell__title}>{data.title}</span>

//     </Stack>
// </div>


// <div
//     ref={provided.innerRef}
//     {...provided.draggableProps}
//     {...provided.dragHandleProps}
//     className={style.cell}

// >

// </div>

//     <div
//         style={{backgroundColor: "green"}}
//         className={style.cell}
//     >
//     </div>

const Cell = (data: (Cell & Subject)) => {
    return (
        <Draggable draggableId={data.id} index={data.index} key={data.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div
                        className={style.cell}
                        style={{
                            backgroundColor: data.color,
                            width: data.fullWidth ? "100%" : "120px"
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
                </div>
            )
            }
        </Draggable>
    );
}

const EmptyCell = (data: (Cell & Gap)) => {
    return (
        <Draggable draggableId={data.id} index={data.index} key={data.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={style.cell__empty}
                />
            )
            }
        </Draggable>
    )
}
//
const isEmpty = (sub: Subject | Gap): sub is Gap => {
    return (sub as Subject).empty;
}

// const WeekNav = () => {
//     return (
//         <div style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//             gap: "4px"
//         }}>
//             <ActionIcon className="day" size={36} px={0}><IconChevronLeft/></ActionIcon>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-around",
//                 gap: "2px"
//             }}>
//                 {headers.map((item, index) => (
//                     <div style={{
//                         fontWeight: 600,
//                         display: "inline",
//                         borderRadius: "6px",
//                         textAlign: "center",
//                     }} key={index}>
//                         <Button className={index === 0 ? "day-selected" : "day"}>
//                             <pre style={{margin: 0}}>{item}</pre>
//                         </Button>
//                     </div>
//                 ))}
//             </div>
//             <ActionIcon className="day" size={36} px={0}><IconChevronRight/></ActionIcon>
//         </div>
//     )
// }


const DayW = (day: (Day & { index: number })) => {
    return (
        <Droppable droppableId={day.index.toString()}>
            {(provided) => (
                <Stack gap={10}
                       style={{padding: "0 6px", borderRadius: "10px"}}
                       {...provided.droppableProps}
                       ref={provided.innerRef}
                >
                    {day.subjects.map((item, index) => (
                            isEmpty(item) ?
                                <EmptyCell key={index}
                                           {...item}
                                           index={index}/>
                                :
                                <Cell key={index}
                                      {...item}
                                      index={index}/>
                        )
                    )
                    }
                    {provided.placeholder}
                </Stack>
            )}
        </Droppable>
    )
}

const removeFromList = (list: SchoolSubject[], index: number): [SchoolSubject, SchoolSubject[]] => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list: SchoolSubject[], index: number, element: SchoolSubject): SchoolSubject[] => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};


const DNDSchedule = (props: { week: Day[] }) => {
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
                {week.map((day, index) => <DayW {...day} key={day.id} index={index}/>)}
            </Group>
        </DragDropContext>
    );
};

const TimeCol = () => {
    return (
        <Stack h="100%" justify="space-around" pr="6px" gap="10px">
            {time.map((item, index) => (
                <div key={index}>
                    <Stack h="60px" justify="center" style={{textAlign: "center"}}>
                        <pre>{item}</pre>
                    </Stack>
                </div>
            ))}
        </Stack>
    )
}

const Schedule = (props: { week: Day[] }) => {
    const [week, _] = useState(props.week);

    return (
        <Rounded className={style.schedule__wrapper} style={{fontWeight: 500}}>
            {/*<Stack className="small">*/}
            {/*    <WeekNav/>*/}
            {/*    <Group className="schedule-day" gap={0}>*/}
            {/*        <TimeCol/>*/}
            {/*        <DayW date={week[0].date} subjects={week[0].subjects} fullWidth/>*/}
            {/*    </Group>*/}
            {/*</Stack>*/}
            <Group gap="12px">
                <div style={{height: "60px", width: "40px"}}/>
                {week.map((day, index) => (
                    <div key={index}
                         style={{
                             width: "120px",
                             height: "60px",
                             textAlign: "center"
                         }}>
                        <pre>{day.date}</pre>
                    </div>
                ))}
            </Group>
            <Group gap="0" style={{alignItems: "flex-start"}} className={style.schedule__main}>
                <TimeCol/>
                <DNDSchedule week={week}/>
            </Group>
        </Rounded>
    );
};

export {Schedule};