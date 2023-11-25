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

export {data as ClassesData};
export type {Item};