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
    createdAt: Date,
    updatedAt: Date,
}
export type QuestID = Pick<Quest, 'id'>;

export type Category = {
    id: number,
    title: string,
    createdAt: Date,
    updatedAt: Date,
}