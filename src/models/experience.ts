import { IProject } from "./project";


export interface IExperience {
    company: string;
    companyDescription: string;
    period: string;
    role: string;
    techStack: string[];
    projects: IProject[];
    crossCutting: {
        title: string;
        description: string;
        items: string[];
    };
}