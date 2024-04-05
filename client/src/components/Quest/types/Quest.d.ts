export type Quest = {
    id: number,
    img: string,
    title: string,
    answer: string,
    cost_id: number,
    category_id: number,
    Category: {
        id: number,
        title: string
    },
    Cost: {
        id: number,
        cost: number,
    }
}
export type QuestID = Pick<Quest, 'id'>;