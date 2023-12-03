import {SideBar} from "@src/widgets/sidebar";
import {ScheduleEdit} from "@src/widgets/schedule-edit";

export default () => {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}}>
                <ScheduleEdit/>
            </main>
            <SideBar/>
        </div>
    );
}
