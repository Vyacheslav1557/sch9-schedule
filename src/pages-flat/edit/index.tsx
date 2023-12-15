import {SideBar} from "@src/widgets/sidebar";
import {ServerDND} from "@src/widgets/edit";

export default () => {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}}>
                <ServerDND/>
            </main>
            {/*<SideBar/>*/}
        </div>
    );
}
