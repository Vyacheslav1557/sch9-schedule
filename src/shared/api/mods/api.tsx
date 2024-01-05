import {Moderator} from "@src/shared/api/mods/types";
import {v4 as uuid} from "uuid";

const moderators: Moderator[] = [
    {
        id: uuid(),
        name: "Moderator000"
    },
    {
        id: uuid(),
        name: "Moderator001"
    },
    {
        id: uuid(),
        name: "Moderator002"
    },
    {
        id: uuid(),
        name: "Moderator003"
    },
    {
        id: uuid(),
        name: "Moderator004"
    },
    {
        id: uuid(),
        name: "Moderator005"
    },
    {
        id: uuid(),
        name: "Moderator006"
    },
    {
        id: uuid(),
        name: "Moderator007"
    },
];


export {moderators};