'use client';

import React, {useState} from "react";
import {
    ClassNames,
    Combobox,
    ComboboxFactory,
    Input,
    InputBase,
    InputBaseFactory,
    ScrollArea,
    Text,
    useCombobox
} from "@mantine/core";
import {data} from "@src/shared/api";

type Props = {
    classNames?: ClassNames<ComboboxFactory>
    targetClassNames?: ClassNames<InputBaseFactory>
}

export const SelectOptionComponent: React.FC<Props> = props => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption()
    });

    const [value, setValue] = useState<string | null>(null);

    const selectedOption = data.find((item) => item.value === value);

    const options = data.map((item) => (
        <Combobox.Option value={item.value} key={item.id}>
            <Text fz="sm" fw={500}>
                {item.value}
            </Text>
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            withinPortal={true}
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
            }}
            classNames={props.classNames}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron/>}
                    onClick={() => combobox.toggleDropdown()}
                    rightSectionPointerEvents="none"
                    multiline
                    classNames={props.targetClassNames}
                >
                    {selectedOption ?
                        <Text fz="sm" fw={500}>
                            {selectedOption.value}
                        </Text>
                        :
                        <Input.Placeholder>Выбрать класс</Input.Placeholder>
                    }
                </InputBase>
            </Combobox.Target>
            <Combobox.Dropdown>
                <ScrollArea.Autosize type="scroll" mah={260}>
                    {options}
                </ScrollArea.Autosize>
            </Combobox.Dropdown>
        </Combobox>
    );
}
