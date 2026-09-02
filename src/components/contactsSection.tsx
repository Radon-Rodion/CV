'use client'
import { LabelsContext } from "@/context/labelsContext";
import Section from "@/elements/section";
import { IContact } from "@/models/contact";
import { IStyleable } from "@/types";
import { useContext } from "react";
import Image from 'next/image';


interface IContactsSectionProps extends IStyleable {
    contactData: IContact
}

export default function ContactsSection({ contactData, className }: IContactsSectionProps) {
    const labels = useContext(LabelsContext);

    return <Section id="contacts" name={contactData.name} className={className} withRightLine={false}>
        <Image
            src="/photo.jpg"
            alt="Pavel Rafeyeu"
            className="w-30 w-max-[640px] self-center mb-2 rounded-md"
            width="12" height="14"
        />
        <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">{labels.phone}:</span> {contactData.phone}
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">{labels.email}:</span>{" "}
            <a href={`mailto:${contactData.email}`} className="text-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {contactData.email}
            </a>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">{labels.linkedIn}:</span>{" "}
            <a href={contactData.linkedIn.url} target="_blank" rel="noopener noreferrer" className="text-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                {contactData.linkedIn.name} ↗
            </a>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">{labels.github}:</span>{" "}
            <a href={contactData.github.url} target="_blank" rel="noopener noreferrer" className="text-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                {contactData.github.name} ↗
            </a>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">{labels.location}:</span> {contactData.location}
        </p>
    </Section>
}