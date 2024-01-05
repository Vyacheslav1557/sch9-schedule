import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "@src/app-flat/styles/index.css"
import {MantineProvider} from '@mantine/core';


type Props = {
    children: React.ReactNode
}

// TODO: заменить html, body на AppShell

const RootLayout: React.FC<Props> = props => {
    return (
        <html lang="ru">
        <body>
        <MantineProvider>
            {props.children}
        </MantineProvider>
        </body>
        </html>
    );
}

export {RootLayout};