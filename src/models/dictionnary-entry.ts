import { User } from "./user";
import { Dictionnary } from "./dictionnary";

export interface DictionnaryEntryShort {
    uid: string;
}

export interface DictionnaryEntry extends DictionnaryEntryShort {
    dictionnary: Dictionnary;
    user: User;

    source: {
        english?: string;
    };
    translation: string;
} 