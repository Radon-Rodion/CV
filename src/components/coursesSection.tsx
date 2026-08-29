'use client'
import { LabelsContext } from "@/context/labelsContext";
import EducationItem from "@/elements/educationItem";
import Section from "@/elements/section";
import { ICourse } from "@/models/course";
import { IStyleable } from "@/types";
import { useContext } from "react";

interface ICoursesSectionProps extends IStyleable {
    coursesData: ICourse[]
}

export default function CoursesSection({ coursesData, className }: ICoursesSectionProps) {
    const labels = useContext(LabelsContext);

    return (<Section id="courses" name={labels.courses} className={className} >
        {coursesData.map((edu, idx) => (
            <EducationItem education={edu} key={idx} />
        ))}
    </Section>
    );
}