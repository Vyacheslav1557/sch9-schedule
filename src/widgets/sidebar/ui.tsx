import React from 'react';
import {WeekPicker} from "@src/widgets/week-picker";
import style from "./style.module.css"
import {SelectOptionComponent} from "@src/widgets/custom-select";
import {Rounded} from "@src/shared/common";

type Props = {
    header?: React.ReactNode
    footer?: React.ReactNode
}

const SideBar: React.FC<Props> = props => {
    // const [opened, {open, close}] = useDisclosure(false);

    return (
        <aside className={style.sidebar}>
            {props.header}
            <Rounded style={{padding: "10px"}}>
                <WeekPicker/>
            </Rounded>
            <SelectOptionComponent classNames={{dropdown: style.dropdown}} targetClassNames={{input: style.input}}/>
            {props.footer}
            {/*<div className="tablet-or-mobile">*/}
            {/*    <Modal*/}
            {/*        opened={opened}*/}
            {/*        onClose={close}*/}
            {/*        transitionProps={{transition: 'rotate-left'}}*/}
            {/*        size="auto"*/}
            {/*    >*/}
            {/*        <div className="small"><DayPicker/></div>*/}
            {/*        <div className="big"><WeekPicker/></div>*/}
            {/*    </Modal>*/}
            {/*    <Button onClick={open} variant="default" radius={6}>Выбрать дату</Button>*/}
            {/*</div>*/}
            {/*<div className="tablet-or-mobile" style={{width: "180px"}}>*/}
            {/*    <SelectOptionComponent/>*/}
            {/*</div>*/}
        </aside>
    );
};

export {SideBar};