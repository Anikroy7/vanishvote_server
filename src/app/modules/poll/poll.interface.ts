export type TPoll = {
    id: string;
    pollType: "yes_no" | "multiple_choice";
    options: TOption[];
    question: string;
    createdBy: string;
    expiresAt: Date;
    createdAt: Date;
    resultsHidden: boolean;
    private: boolean;
    reactions: TReaction[];
}


export type TReaction={
    userId: string;
    reactionType: ReactionType

}

export type TOption = {
    text: string;
    vote: string[];
}

enum ReactionType {
   'trending', 'like'
}

export type TVote = {
    optionIndex: number;
    userId: string;
}


