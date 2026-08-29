

export interface ISkill {
    title: string;
    items: {name: string, link?: string}[];
    /**
     * Integer; Min: 0; Max: 100
     */
    level?: number;
    label?: string;
}