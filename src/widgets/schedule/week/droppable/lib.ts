import {SchoolSubject} from "@src/shared/api";

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

export {removeFromList, addToList};