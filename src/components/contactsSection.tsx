'use client'
import { LabelsContext } from "@/context/labelsContext";
import Section from "@/elements/section";
import { IContact } from "@/models/contact";
import { IStyleable } from "@/types";
import { useContext } from "react";


interface IContactsSectionProps extends IStyleable {
    contactData: IContact
}

export default function ContactsSection({ contactData, className }: IContactsSectionProps) {
    const labels = useContext(LabelsContext);

    return <Section id="contacts" name={contactData.name} className={className} withRightLine={false}>
        <img
            src="/photo.jpg"
            alt="Pavel Rafeyeu"
            className="self-center mb-2 rounded-md"
            sizes="(max-width: 640px) 12rem, 14rem"
        />
        <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{labels.phone}:</span> {contactData.phone}
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{labels.email}:</span>{" "}
            <a href={`mailto:${contactData.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {contactData.email}
            </a>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{labels.linkedIn}:</span> {contactData.linkedIn}
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{labels.github}:</span>{" "}
            <a href={contactData.github.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                {contactData.github.name} ↗
            </a>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{labels.location}:</span> {contactData.location}
        </p>
    </Section>
}