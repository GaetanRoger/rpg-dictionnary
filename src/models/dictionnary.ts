import { User } from "./user";

export interface DictionnaryShort {
    uid: string;
    name: string;
}

export interface Dictionnary extends DictionnaryShort {
    user: User;
} 