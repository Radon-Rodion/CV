'use client'
import { LabelsContext } from "@/context/labelsContext";
import QualityItem from "@/elements/qualityItem";
import Section from "@/elements/section";
import SkillItem from "@/elements/skillItem";
import { IAdditional } from "@/models/additional";
import { asSkill } from "@/models/language";
import { IStyleable } from "@/types";
import { useContext } from "react";


interface IAdditionalSectionProps extends IStyleable {
    additionalData: IAdditional
}

export function LanguagesSection({ additionalData, className }: IAdditionalSectionProps) {
    const labels = useContext(LabelsContext);
    const { languages } = additionalData;
    return <Section id="languages" name={labels.languages} className={className}>
        {languages.map(l => <SkillItem key={l.name} skill={asSkill(l)} />)}
    </Section>;
}

export function AboutMeSection({ additionalData, className }: IAdditionalSectionProps) {
    const labels = useContext(LabelsContext);
    const { aboutMe } = additionalData;
    return <Section id="about-me" name={labels.aboutMe} className={className}>
        <p className="text-zinc-600 dark:text-zinc-400 mt-1">{aboutMe}</p>
    </Section>;
}

export function QualitiesSection({ additionalData, className }: IAdditionalSectionProps) {
    const labels = useContext(LabelsContext);
    const { qualities } = additionalData;
    return <Section id="qualities" name={labels.qualities} className={className}>
        <div className="flex gap-2 flex-wrap">
            {qualities.map(q => <QualityItem key={q} quality={q} />)}
        </div>
    </Section>;
}