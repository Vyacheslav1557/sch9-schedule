import {Table, TableTbody, TableTd, TableTr} from "@mantine/core";
import {subjects} from "@src/shared/api/temporary/api";

const ScheduleEdit = () => {
    const rows = subjects.map((subject, index) => (
        <TableTr key={index}>
            <TableTd>
                <pre>{subject.time}</pre>
            </TableTd>
            <TableTd>{subject.name}</TableTd>
            <TableTd>{subject.description}</TableTd>
            <TableTd>{subject.homework}</TableTd>
            <TableTd>{subject.color}</TableTd>
        </TableTr>
    ));

    return (
        <Table className="rounded" p={10}>
            <TableTbody>
                {rows}
            </TableTbody>
        </Table>
    );
};

export {ScheduleEdit};