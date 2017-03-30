export interface Conversation {

    _id: number;
    creator: string;
    date: any;
    talkwith: string;
    relationship: string;
    topic: string;
    question: string;
    answer: string;
    conversationtype: string;
    rating: number;
    feeling: Object;
}