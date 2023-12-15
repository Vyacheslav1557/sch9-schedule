import React from "react";
import {week} from "@src/shared/api";
import {DNDSchedule} from "@src/widgets/edit/cl-edit";

const ServerDND = () => {
    return <DNDSchedule week={week}/>
}


export {ServerDND};