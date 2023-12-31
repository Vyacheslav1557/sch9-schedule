import {SideBar} from "@src/widgets/sidebar";
import {ScheduleView} from "@src/widgets/schedule";
import {week} from "@src/shared/api";
import style from "./style.module.css"
import {Navbar} from "@src/widgets/navbar";

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
                <ScheduleView week={week}/>
            </main>
            <SideBar/>
        </div>
    );
}
