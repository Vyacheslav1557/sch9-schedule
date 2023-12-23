'use client';

import {Button} from "@mantine/core";
import {useRouter} from "next/navigation";
import style from "./style.module.css";

export default () => {
    const router = useRouter();

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Button onClick={() => router.push("/login")}
                        variant="gradient"
                        gradient={{from: 'blue', to: 'teal', deg: 90}}
                >
                    Войти
                </Button>
            </header>
            <main>
                <div>
                    <Button onClick={() => router.push("/schedule/1/1")}>
                        смотреть расписание
                    </Button>
                </div>

            </main>
        </div>
    )
}