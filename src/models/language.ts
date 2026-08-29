import { ISkill } from "./skill";


export interface ILanguage {
    name: string,
    level: string,
    link?: string
};

export function asSkill(lang: ILanguage): ISkill {
    return {
        title: '',
        items: [{ name: lang.name, link: lang.link }],
        label: lang.level,
        level: langLevelToPercentage(lang.level)
    }
}

function langLevelToPercentage(level: string): number {
    switch (level) {
        case 'A1':
            return 15;
        case 'A2':
            return 25;
        case 'B1':
            return 40;
        case 'B2':
            return 65;
        case 'C1':
            return 85;
        case 'C2':
            return 100;
        default:
            return 0;
    }
}