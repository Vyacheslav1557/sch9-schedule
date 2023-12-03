import {SideBar} from "@src/widgets/sidebar";
import {Schedule} from "@src/widgets/schedule";

export default () => {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}}>
                <Schedule/>
            </main>
            <SideBar/>
        </div>
    );
}
