import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "@src/app-flat/styles/index.css"
import React from 'react';
import {MantineProvider} from '@mantine/core';

export const metadata = {
    title: 'Schedule',
    description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({children}: { children: any }) {
    return (
        <html lang="ru">
        <body>
        <MantineProvider>{children}</MantineProvider>
        </body>
        </html>
    );
}
