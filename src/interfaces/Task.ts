

export interface Task {
    id?: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at?: Date;
    updated_at?: Date;
    show?: boolean;
}