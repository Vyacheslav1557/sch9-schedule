import {SideBar} from "@/src/components/sidebar";
import {Schedule} from "@/src/components/schedule";

export default function Page() {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}} className="desktop">
                {
                    // className="desktop"
                }
                <Schedule/>
            </main>
            <SideBar/>
        </div>
    );
}
