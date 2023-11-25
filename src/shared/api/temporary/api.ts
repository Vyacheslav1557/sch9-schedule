let classes = [
    "10 класс А",
    "10 класс Б",
    "10 класс В",
    "8 класс A",
    "8 класс Б",
    "8 класс В",
    "8 класс Г",
]

interface Item {
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
]

export {data as ClassesData, headers, time};
export type {Item};