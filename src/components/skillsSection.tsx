'use client'
import { LabelsContext } from "@/context/labelsContext";
import Section from "@/elements/section";
import SkillItem from "@/elements/skillItem";
import { ISkill } from "@/models/skill";
import { IStyleable } from "@/types";
import { useContext } from "react";

interface ISkillsSectionProps extends IStyleable {
    skillsData: ISkill[]
}

export default function SkillsSection({ skillsData, className }: ISkillsSectionProps) {
    const labels = useContext(LabelsContext);
    return (
        <Section id="skills" name={labels.skills} className={className} withRightLine>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 items-center w-full">
                {skillsData.map(s => <SkillItem key={s.title} skill={s} />)}
            </div>
        </Section>
    );
}