export type TPoll = {
    id: string;
    pollType: PollType;
    options: TOption[];
    question: string;
    createdBy: string;
    expiresAt: Date;
    createdAt: Date;
    resultsHidden: boolean;
    private: boolean;
}


export type TOption= {
    text: string;
    vote: number;
}

enum PollType {
    "yes_no",
    "multiple_choice"
}