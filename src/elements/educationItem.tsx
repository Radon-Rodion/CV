import { isCourse } from "@/models/course";
import { IEducation } from "@/models/education";


interface IEducationItemProps {
    education: IEducation
}

export default function EducationItem({ education }: IEducationItemProps) {
    const educationIsCourse = isCourse(education);

    return <div
        className="flex flex-col sm:flex-row sm:items-start gap-4"
    >
        <div className="flex-1">
            <h3 className="text-lg font-medium text-foreground">{education.name}</h3>
            <a className="text-zinc-600 dark:text-zinc-400 mt-1" href={educationIsCourse ? education.link : undefined}>
                {education.description}
            </a>
        </div>
        <div className="shrink-0 w-full sm:w-36 pt-1">
            <time className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{education.period}</time>
        </div>
    </div>;
}