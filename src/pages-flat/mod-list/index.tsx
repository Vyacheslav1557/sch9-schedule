'use client';

import React, {Fragment, useState} from 'react';
import style from "./style.module.css";
import {Button, Group, Stack, Title} from "@mantine/core";
import {Navbar} from "@src/widgets/navbar";
import {Rounded} from "@src/shared/common";
import {Moderator, moderators as modList} from "@src/shared/api/mods";
import {ModItem} from "@src/pages-flat/mod-list/mod-item";
import {NewMod} from "@src/pages-flat/mod-list/new-item";

export default () => {
    const [moderators, setModerators] = useState(modList);

    const add = (elem: Moderator) => {
        setModerators([elem, ...JSON.parse(JSON.stringify(moderators))])
    }

    return (
        <div className={style.wrapper}>
            <Group align="flex-start">
                <Navbar/>
                <Rounded className={style.main}>
                    <Stack>
                        <Title size={24} style={{textAlign: "center"}}>
                            Список модераторов
                        </Title>
                        <Stack gap="5">
                            <NewMod add={add}/>
                            {moderators.map((item, index) => (
                                <Fragment key={item.id}>
                                    <ModItem item={item} isLast={index === moderators.length - 1}/>
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