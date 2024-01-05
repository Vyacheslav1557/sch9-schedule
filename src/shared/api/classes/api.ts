import type {Item} from "./types";
import {v4 as uuid} from "uuid";

let classes = [
    "10 класс А",
    "10 класс Б",
    "10 класс В",
    "8 класс A",
    "8 класс Б",
    "8 класс В",
    "8 класс Г",
]


const data: Item[] = [];

for (let i = 0; i < classes.length; i++) {
    data.push({value: `${classes[i]} - 1 группа`, id: uuid()})
    data.push({value: `${classes[i]} - 2 группа`, id: uuid()})
}

export {data};