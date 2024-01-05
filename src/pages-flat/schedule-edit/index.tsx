import {SideBar} from "@src/widgets/sidebar";
import {week} from "@src/shared/api";
import style from "./style.module.css";
import {Navbar} from "@src/widgets/navbar";
import {ScheduleEdit} from "@src/widgets/schedule";
import {Button, Stack} from "@mantine/core";
import React from "react";

type Props = {
    params: {
        'class-id': string,
        week: string
    }
}
const Page: React.FC<Props> = props => {
    return (
        <div className={style.wrapper}>
            <Navbar/>
            <main style={{width: "fit-content"}}>
                <ScheduleEdit day={week[0]}/>
            </main>
            <SideBar header={
                <Button variant="filled" color="violet">
                    Копировать с прошлой недели
                </Button>
            }/>
            <Stack>
                <Button variant="filled" color="red">
                    Отменить
                </Button>
                <Button>
                    Сохранить
                </Button>
            </Stack>
        </div>
    );
}

export default Page;