import { User } from "./user";

export interface DictionaryShort {
    uid: string;
    name: string;
}

export interface Dictionary extends DictionaryShort {
    user: User;
} 