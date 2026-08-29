'use server'

import data, { DataLang } from '@/data';
import EducationSection from '@/components/educationSection';
import ExperienceSection from '@/components/experienceSection';
import SkillsSection from '@/components/skillsSection';
import { AboutMeSection, LanguagesSection, QualitiesSection } from '@/components/additionalSections';
import ContactsSection from '@/components/contactsSection';
import CoursesSection from '@/components/coursesSection';
import LabelsContextProvider from '@/context/labelsContext';
import { LanguageSelector } from '@/components/languageSelector';

interface IPageProps {
    lang: DataLang
}

const languages = Object.keys(data).map(k => ({ lang: k as DataLang }));

export async function generateStaticParams() {
    return languages;
}

export default async function Page({ params }: { params: Promise<IPageProps> }) {
    const { lang } = await params;
    const dataToUse = data[lang];

    return <LabelsContextProvider labels={dataToUse.labels}>
        <main className="relative flex flex-col md:flex-row gap-5 bg-zinc-50 dark:bg-black font-sans w-full p-5 md:p-0">
            <LanguageSelector languages={languages.map(l => l.lang)} currentLang={lang} />
            <div className="contents md:flex md:flex-col bg-zinc-100 dark:bg-zinc-900 md:py-5 md:pl-5 md:pr-3 h-screen">
                <ContactsSection
                    contactData={dataToUse.contactData}
                    className="order-1 md:order-none [&>div]:space-y-0 [&>h2]:mt-1"
                />
                <LanguagesSection
                    additionalData={dataToUse.additionalData}
                    className="order-3 md:order-none"
                />
                <AboutMeSection
                    additionalData={dataToUse.additionalData}
                    className="order-5 md:order-none"
                />
                <QualitiesSection
                    additionalData={dataToUse.additionalData}
                    className="order-7 md:order-none"
                />
            </div>
            <div className="contents md:flex md:flex-col md:py-5 md:pr-5">
                <ExperienceSection
                    experienceData={dataToUse.experienceData}
                    className="order-2 md:order-none"
                />
                <EducationSection
                    educationData={dataToUse.educationData}
                    className='order-4 md:order-none'
                />
                {/* <CoursesSection
                coursesData={dataToUse.coursesData}
                className='order-6 md:order-none'
            /> */}
                <SkillsSection
                    skillsData={dataToUse.skillsData}
                    className="order-8 md:order-none"
                />
            </div>
        </main>
    </LabelsContextProvider>;
}