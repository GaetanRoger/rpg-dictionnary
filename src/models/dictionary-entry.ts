import { User } from "./user";
import { Dictionary } from "./dictionary";

export interface DictionaryEntryShort {
    uid: string;
}

export interface DictionaryEntry extends DictionaryEntryShort {
    dictionary: Dictionary;
    user: User;

    source: {
        english?: string;
    };
    translation: string;
} 