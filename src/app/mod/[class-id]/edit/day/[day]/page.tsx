import {SideBar} from "@src/widgets/sidebar";
import {week} from "@src/shared/api";
import style from "./style.module.css";
import {Navbar} from "@src/widgets/navbar";
import {ScheduleEdit} from "@src/widgets/schedule";

type Props = {
    params: {
        'class-id': string,
        week: string
    }
}

export default ({params}: Props) => {
    return (
        <div className={style.wrapper}>
            <Navbar/>
            <main style={{width: "fit-content"}}>
                <ScheduleEdit day={week[0]}/>
            </main>
            <SideBar/>
        </div>
    );
}