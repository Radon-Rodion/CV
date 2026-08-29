'use client'
import { LabelsContext } from "@/context/labelsContext";
import Accordion from "@/elements/accordion";
import ProjectItem from "@/elements/projectItem";
import { IExperience } from "@/models/experience";
import { IStyleable } from "@/types";
import { useContext } from "react";

interface IExperienceSection extends IStyleable {
    experienceData: IExperience
}

export default function ExperienceSection({ experienceData, className }: IExperienceSection) {
    const labels = useContext(LabelsContext);
    return (
        <section id="experience" className={className}>
            <h2 className="text-3xl font-bold mb-3 text-foreground">{labels.experience}</h2>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-300 dark:border-zinc-700 space-y-3">
                {/* Шапка компании */}
                <div className="relative">
                    <div className="absolute -left-[31px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 border-4 border-white dark:border-zinc-950" />
                    <h3 className="text-2xl font-semibold text-foreground">{experienceData.company}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 italic mt-1">{experienceData.companyDescription}</p>
                    <div className="flex flex-wrap gap-3 mt-3 text-sm font-medium">
                        <span className="text-foreground">{experienceData.role}</span>
                        <span className="text-zinc-400">•</span>
                        <time className="text-zinc-600 dark:text-zinc-400">{experienceData.period}</time>
                    </div>
                </div>

                {/* Стек технологий */}
                <div className="flex flex-wrap gap-2">
                    {experienceData.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs sm:text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-200 dark:border-zinc-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Проекты */}
                <div className="space-y-2">
                    {experienceData.projects.map((project) => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </div>

                {/* Сквозная деятельность */}
                <Accordion title={<>
                    {experienceData.crossCutting.title}
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">{experienceData.crossCutting.description}</p>
                </>}>
                    <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 list-disc list-inside marker:text-zinc-400 mt-5">
                        {experienceData.crossCutting.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </Accordion>
            </div>
        </section>
    );
}