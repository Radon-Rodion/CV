'use client'

import { IProject } from '@/models/project';
import Accordion from './accordion';

interface IProjectItemProps {
    project: IProject
}

export default function ProjectItem({ project }: IProjectItemProps) {
    return <Accordion title={<>
        {project.title}
        <div className="flex flex-wrap gap-2 text-sm">
            <time className="text-zinc-500 dark:text-zinc-400 font-normal">{project.period}</time>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">{project.stack.join(" • ")}</span>
        </div>
    </>}>
        <ul className="mt-4 space-y-2.5 text-zinc-700 dark:text-zinc-300 list-disc list-inside marker:text-zinc-400 leading-relaxed">
            {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
            ))}
        </ul>
    </Accordion>;
}