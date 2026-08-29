

import { additionalDataEng, additionalDataRus } from './additionalData';
import { contactDataRus, contactDataEng } from './contactData';
import { coursesDataEng, coursesDataRus } from './coursesData';
import { educationDataEng, educationDataRus } from './educationData';
import { experienceDataEng, experienceDataRus } from './experienceData';
import { labelsEng, labelsRus } from './labels';
import { skillsDataEng, skillsDataRus } from './skillsData';

const data = {
    ru: {
        contactData: contactDataRus,
        experienceData: experienceDataRus,
        educationData: educationDataRus,
        coursesData: coursesDataRus,
        skillsData: skillsDataRus,
        additionalData: additionalDataRus,
        labels: labelsRus
    },
    en: {
        contactData: contactDataEng,
        experienceData: experienceDataEng,
        educationData: educationDataEng,
        coursesData: coursesDataEng,
        skillsData: skillsDataEng,
        additionalData: additionalDataEng,
        labels: labelsEng
    }
};

export type DataLang = keyof typeof data;

export default data;