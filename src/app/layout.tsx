import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "@src/app-flat/styles/index.css"
import {MantineProvider} from '@mantine/core';

export const metadata = {
    title: 'Schedule',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
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
