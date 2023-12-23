import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "@src/app-flat/styles/index.css"
import {MantineProvider} from '@mantine/core';

export const metadata = {
    title: 'Schedule',
};

type Props = {
    children: React.ReactNode
}

// TODO: заменить html, body на AppShell

export default ({children}: Props) => {
    return (
        <html lang="ru">
        <body>
        <MantineProvider>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
