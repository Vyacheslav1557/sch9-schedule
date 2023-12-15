// TODO: добавить порядковые номера и расписание звонков на каждый день


// TODO: add time field
type Gap = {
    id: string

    empty: true
    // time: string
};


// TODO: add description & homework & time fields
type Subject = {
    id: string

    empty: false
    color: string
    // time: string

    title: string
    // description: string
    // homework: string
};

type SchoolSubject = Gap | Subject;

type Day = {
    id: string
    date: string
    subjects: SchoolSubject[]
};

export type {Gap, Subject, SchoolSubject, Day};