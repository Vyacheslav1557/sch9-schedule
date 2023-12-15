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
                color: 'var(--mantine-color-red-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: 'var(--mantine-color-red-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: 'var(--mantine-color-pink-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Русский язык',
                color: 'var(--mantine-color-pink-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Литература',
                color: 'var(--mantine-color-grape-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: 'var(--mantine-color-red-9)',
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
                color: 'var(--mantine-color-grape-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Литература',
                color: 'var(--mantine-color-grape-5)',
            },
            {
                empty: true,
                id: uuidv4(),
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Геометрия',
                color: 'var(--mantine-color-grape-9)',
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
                color: 'var(--mantine-color-pink-9)',
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
                color: 'var(--mantine-color-pink-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: 'var(--mantine-color-pink-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физическая культура',
                color: 'var(--mantine-color-violet-5)',
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
                color: 'var(--mantine-color-pink-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: 'var(--mantine-color-red-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физическая культура',
                color: 'var(--mantine-color-violet-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: 'var(--mantine-color-red-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'География',
                color: 'var(--mantine-color-violet-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: 'var(--mantine-color-indigo-5)',
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
                color: 'var(--mantine-color-grape-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Геометрия',
                color: 'var(--mantine-color-grape-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: 'var(--mantine-color-indigo-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Физика',
                color: 'var(--mantine-color-red-9)',
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
                color: 'var(--mantine-color-indigo-9)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Биология',
                color: 'var(--mantine-color-blue-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Вероятность и статистика',
                color: 'var(--mantine-color-teal-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Английский язык',
                color: 'var(--mantine-color-indigo-5)',
            },
            {
                empty: false,
                id: uuidv4(),
                title: 'Алгебра и начала математического анализа',
                color: 'var(--mantine-color-pink-5)',
            },
        ]
    },
]


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

export {week, time, headers};
