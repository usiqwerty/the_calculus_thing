export type TopicDescription = { id: number, title: string, content: string }
export type SubjDescription = { id: number, title: string, description: string }

const subjects = [
    {
        id: 0,
        title: "Предел",
        description: "Предел функции в точке, на бесконеччности, односторонний предел",
        topics: [0]
    },
    {id: 1, title: "Беспредел", description: "Совсем обленились"}
];

export function get_all_subjects() {
    return subjects;
}

export function get_topics_in_subject(subject_id: number): TopicDescription[] {
    if (subject_id == 0) {
        return [
            {id: 0, title: "Предел функции в точке", content: "Formula"}
        ];
    }
    return [];
}

export function get_subject_by_id(subj_id: number) {
    return subjects[subj_id];
}