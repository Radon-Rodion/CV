import { IAdditional } from "@/models/additional";

export const additionalDataRus: IAdditional = {
  aboutMe: "Full-stack разработчик .NET/React, специализируюсь на стандартизации и автоматизации разработки | Кошатник",
  languages: [
    { name: "Английский", level: "B2" },
    { name: "Немецкий", level: "A1" }
  ],
  qualities: ["Гибкость", "Адаптивность", "Стрессоустойчивость", "Работа в команде"]
};

export const additionalDataEng: IAdditional = {
  aboutMe: "Full-stack .NET/React engineer focused on standardization, automation, code quality, and developer productivity | Cat lover",
  languages: [
    { name: "English", level: "B2" },
    { name: "German", level: "A1" }
  ],
  qualities: ["Flexibility", "Adaptability", "Resilience", "Teamwork"]
};