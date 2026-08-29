'use client'

import { LabelsContext } from "@/context/labelsContext";
import EducationItem from "@/elements/educationItem";
import Section from "@/elements/section";
import { IEducation } from "@/models/education";
import { IStyleable } from "@/types";
import { useContext } from "react";

interface IEducationSectionProps extends IStyleable {
  educationData: IEducation[]
}

export default function EducationSection({ educationData, className }: IEducationSectionProps) {
  const labels = useContext(LabelsContext);
  return (
    <Section id="education" name={labels.education} className={className} withRightLine >
      {educationData.map((edu, idx) => (
        <EducationItem education={edu} key={idx} />
      ))}
    </Section>
  );
}