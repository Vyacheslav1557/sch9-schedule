import {Gap, Subject} from "@src/shared/api";

const isEmpty = (sub: Subject | Gap): sub is Gap => {
    return (sub as Subject).empty;
}

export {isEmpty};