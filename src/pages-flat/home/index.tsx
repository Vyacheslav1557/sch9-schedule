import {Button} from "@mantine/core";
import style from "./style.module.css";
import Link from "next/link";

export default () => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Button component={Link}
                        href="/login"
                        variant="gradient"
                        gradient={{from: 'blue', to: 'teal', deg: 90}}
                >
                    Войти
                </Button>
            </header>
            <main>
                <div>
                    <Button component={Link} href="/schedule">
                        смотреть расписание
                    </Button>
                </div>
                <br/>
                <div>
                    <Button component={Link} href="/mod/day/edit">
                        редактировать расписание
                    </Button>
                </div>
                <br/>
                <div>
                    <Button component={Link} href="/mod/day">
                        редактировать свойства класса
                    </Button>
                </div>
                <br/>
                <div>
                    <Button component={Link} href="admin/class">
                        редактировать список классов
                    </Button>
                </div>
            </main>
        </div>
    )
}