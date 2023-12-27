export type TopicDescription = { id: number, title: string, content: ContentBlock[] }
export type SubjDescription = { id: number, title: string, description: string, topics: number[] }
export type ContentBlock = {id:number, content_type:string, content: string}

const subjects: SubjDescription[] = [
    {
        id: 0,
        title: "Предел",
        description: "Предел функции в точке, на бесконеччности, односторонний предел",
        topics: [0]
    },
    {id: 1, title: "Беспредел", description: "Совсем обленились", topics:[]}
];
const topics: TopicDescription[]=[
    {id: 0, title: "Предел функции в точке", content: [{id:0, content_type:"math", content:"f(x)=x^2"}]}
];
export function get_all_subjects() {
    return subjects;
}

export function get_topics_in_subject(subject_id: number): TopicDescription[] {
    if (subject_id == 0) {
        return [topics[0]];
    }
    return [];
}

export function get_subject_by_id(subj_id: number) {
    return subjects[subj_id];
}
export function get_topic_by_id(topic_id: number) {
    return topics[topic_id];
}