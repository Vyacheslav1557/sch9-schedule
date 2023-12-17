import {SideBar} from "@src/widgets/sidebar";
import {Schedule} from "@src/widgets/schedule";
import {week} from "@src/shared/api";

export default () => {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}}>
                <Schedule week={week}/>
            </main>
            <SideBar/>
        </div>
    );
}
