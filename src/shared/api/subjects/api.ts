import {Day} from "./types";
import {v4 as uuidv4} from "uuid";

const week: Day[] = [
    {
        id: uuidv4(),
        date: '11\nПН',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Классные часы "Разговоры о важном"',
                color: '#FF6B6B',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: '#C92A2A',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: '#F06595',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Русский язык',
                color: '#94D82D',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Литература',
                color: '#CC5DE8',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: '#C92A2A',
            },
        ]
    },
    {
        id: uuidv4(),
        date: '12\nВТ',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Литература',
                color: '#CC5DE8',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Литература',
                color: '#CC5DE8',
            },
            {
                empty: true,
                id: uuidv4(),
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Геометрия',
                color: '#862E9C',
            },
        ]
    },
    {
        id: uuidv4(),
        date: '13\nСР',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Русский язык',
                color: '#94D82D',
            },
            {
                empty: true,
                id: uuidv4(),
            },
            {
                empty: true,
                id: uuidv4(),
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: '#F06595',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: '#F06595',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физическая культура',
                color: '#845EF7',
            },
        ]
    },
    {
        id: uuidv4(),
        date: '14\nЧТ',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: '#F06595',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: '#C92A2A',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физическая культура',
                color: '#845EF7',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: '#C92A2A',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'География',
                color: '#5F3DC4',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: '#5C7CFA',
            },
        ]
    },
    {

        id: uuidv4(),
        date: '15\nПТ',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Геометрия',
                color: '#862E9C',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Геометрия',
                color: '#862E9C',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: '#5C7CFA',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: '#C92A2A',
            },
        ]
    },
    {
        id: uuidv4(),
        date: '16\nСБ',
        subjects: [
            {
                empty: false,
                id: uuidv4(),
                title: 'Химия',
                color: '#364FC7',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Биология',
                color: '#339AF0',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Вероятность и статистика',
                color: '#20C997',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: '#5C7CFA',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: '#F06595',
            },
        ]
    },
]

type Temp = {
    title: string,
    color: string
}

let subjects: Temp[] = [];
for (const day of week) {
    for (const subject of day.subjects) {
        if (!subject.empty) {
            subjects.push({
                title: subject.title,
                color: subject.color
            })
        }
    }
}

const onlyUnique = (value: Temp, index: number, array: Temp[]) => {
    return array.findIndex((item) => item.title == value.title) === index;
}

const uniqueSubjects = subjects.filter(onlyUnique);

// TODO: get rid of headers array
const headers = [
    "14\nПН",
    "15\nВТ",
    "16\nСР",
    "17\nЧТ",
    "18\nПТ",
    "19\nСБ",
    "20\nВС",
]

// TODO: get rid of time array
const time = [
    "08:10\n08:50",
    "09:05\n09:45",
    "10:00\n10:40",
    "11:00\n11:40",
    "12:00\n12:40",
    "12:50\n13:30",
    "13:35\n14:15",
    "13:35\n14:15",
]

export {week, time, headers, uniqueSubjects};
export type {Temp};