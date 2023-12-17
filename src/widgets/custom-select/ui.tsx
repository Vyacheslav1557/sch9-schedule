import {Combobox, Group, Input, InputBase, Modal, ScrollArea, Text, useCombobox} from "@mantine/core";
import React, {useState} from "react";
import {useDisclosure} from "@mantine/hooks";
import {data, Item} from "@src/shared/api";

const SelectOption = ({value, description}: Item) => {
    return (
        <Group>
            <div>
                <Text fz="sm" fw={500}>
                    {value}
                </Text>
                <Text fz="xs" opacity={0.6}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

export const SelectOptionComponent = () => {
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            close();
        }
    });

    const [value, setValue] = useState<string | null>(null);
    const selectedOption = data.find((item) => item.value === value);
    const [opened, {open, close}] = useDisclosure(false);

    const options = data.map((item) => (
        <Combobox.Option value={item.value} key={item.value + item.description}>
            <SelectOption {...item} />
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            withinPortal={true}
            onOptionSubmit={(val) => {
                setValue(val);
                close();
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron/>}
                    onClick={() => {
                        open();
                        combobox.openDropdown();
                    }}
                    rightSectionPointerEvents="none"
                    multiline
                >
                    {selectedOption ? (
                        <SelectOption {...selectedOption} />
                    ) : (
                        <Input.Placeholder>Выбрать класс</Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>
            {/*<Modal opened={opened}*/}
            {/*       onClose={close}*/}
            {/*       size={284}*/}
            {/*       transitionProps={{transition: 'rotate-left'}}*/}
            {/*       className="tablet-or-mobile"*/}
            {/*>*/}
            {/*    <ScrollArea.Autosize type="scroll" mah={400}>*/}
            {/*        {options}*/}
            {/*    </ScrollArea.Autosize>*/}
            {/*</Modal>*/}
            <Combobox.Dropdown>
                <ScrollArea.Autosize type="scroll" mah={260}>
                    {options}
                </ScrollArea.Autosize>
            </Combobox.Dropdown>
        </Combobox>
    );
}
