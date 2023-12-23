import {SideBar} from "@src/widgets/sidebar";
import {Schedule} from "@src/widgets/schedule";
import {week} from "@src/shared/api";

type Props = {
    params: {
        'class-id': string,
        week: string
    }
}

export default ({params}: Props) => {
    return (
        <div className="wrapper">
            <main style={{width: "fit-content"}}>
                <Schedule week={week} draggable/>
            </main>
            <SideBar/>
        </div>
    );
}
