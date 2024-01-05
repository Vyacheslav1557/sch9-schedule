'use client';

import React, {Fragment, useState} from 'react';
import {Button, Group, Stack, Title} from "@mantine/core";
import {Rounded} from "@src/shared/common";
import {data as dataClasses, Item} from "@src/shared/api";
import {Navbar} from "@src/widgets/navbar";
import style from "./style.module.css";
import {ClassItem} from "@src/pages-flat/class-list/class-item";
import {NewItem} from "@src/pages-flat/class-list/new-item";

// TODO: добавить фильтр
// TODO: добавить paggination

export default () => {
    const [data, setData] = useState(dataClasses);

    const add = (elem: Item) => {
        elem.value = elem.value.trim();
        if (!elem.value)
            return;
        setData([elem, ...JSON.parse(JSON.stringify(data))]);
    }

    return (
        <div className={style.wrapper}>
            <Group align="flex-start">
                <Navbar/>
                <Rounded className={style.main}>
                    <Stack>
                        <Title size={24} style={{textAlign: "center"}}>
                            Список классов
                        </Title>
                        <Stack gap="5">
                            <NewItem add={add}/>
                            {data.map((item, index) => (
                                <Fragment key={item.id}>
                                    <ClassItem item={item} isLast={index === data.length - 1}/>
                                </Fragment>
                            ))}
                        </Stack>
                    </Stack>
                </Rounded>
                <Stack>
                    <Button variant="filled" color="red">
                        Отменить
                    </Button>
                    <Button>
                        Сохранить
                    </Button>
                </Stack>
            </Group>
        </div>
    );
};