import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./global.css"
import React from 'react';
import {MantineProvider} from '@mantine/core';

export const metadata = {
    title: 'Schedule',
    description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({children}: { children: any }) {
    return (
        <html lang="ru">
        <head>
            <link rel="shortcut icon" href="/favicon.svg"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
        <MantineProvider>{children}</MantineProvider>
        </body>
        </html>
    );
}
