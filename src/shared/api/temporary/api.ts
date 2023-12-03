let classes = [
    "10 класс А",
    "10 класс Б",
    "10 класс В",
    "8 класс A",
    "8 класс Б",
    "8 класс В",
    "8 класс Г",
]

type Item = {
    value: string;
    description: string;
}

const data: Item[] = [];

for (let i = 0; i < classes.length; i++) {
    data.push({value: classes[i], description: "1 группа"})
    data.push({value: classes[i], description: "2 группа"})
}

const headers = [
    "14\nПН",
    "15\nВТ",
    "16\nСР",
    "17\nЧТ",
    "18\nПТ",
    "19\nСБ",
    "20\nВС",
]

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

type Subject = {
    name: string,
    description?: string,
    homework?: string,
    color?: string,
    time?: string
}

const subjects: Subject[] = [
    {
        name: 'Классные часы "Разговоры о важном"',
        color: "#5272E9",
        time: "08:10\n08:50"
    },
    {
        name: "Физика",
        color: "#52BCE9",
        time: "09:05\n09:45"
    },
    {
        name: "Английский язык",
        color: "#E952D1",
        time: "10:00\n10:40"
    },
    {
        name: "Алгебра и начала математического анализа",
        color: "#E98852",
        time: "11:00\n11:40"
    },
    {
        name: "Геометрия",
        color: "#43DC40",
        time: "12:00\n12:40"
    },
    {
        name: "Физическая культура",
        color: "#E9525B",
        time: "12:50\n13:30"
    },
    {
        name: "Русский язык",
        color: "#7500EA",
        time: "13:35\n14:15"
    }
]

type EmptySubject = {}

type Day = {
    date: string
    subjects: (Subject | EmptySubject)[]
}

const shuffle = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const week: Day[] = []

for (let i = 0; i < 7; i++) {
    week.push({
        date: headers[i],
        subjects: subjects.slice()
    })

    while (week[i].subjects.length != time.length) {
        week[i].subjects.push({})
    }

    week[i].subjects = shuffle(week[i].subjects)
}

export type {Item, Subject, Day, EmptySubject};
export {data as ClassesData, week, time, headers};
