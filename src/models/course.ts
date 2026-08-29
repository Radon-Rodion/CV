import { IEducation } from "./education";


export interface ICourse extends IEducation {
    link?: string
}

export function isCourse(education: IEducation): education is ICourse {
    return !!(education as ICourse).link;
}