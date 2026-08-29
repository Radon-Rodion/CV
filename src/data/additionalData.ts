import { IAdditional } from "@/models/additional";

export const additionalDataRus: IAdditional = {
  aboutMe: "Fullstack-developer React+ASP.NET, стандартизатор и автоматизатор, кошатник",
  languages: [
    { name: "Английский", level: "B2" },
    { name: "Немецкий", level: "A1" }
  ],
  qualities: ["Обучаемость", "Ответственность", "Исполнительность"]
};

export const additionalDataEng: IAdditional = {
  aboutMe: "Full-stack React+ASP.NET developer focused on standardization and automation | Cat lover",
  languages: [
    { name: "English", level: "B2" },
    { name: "German", level: "A1" }
  ],
  qualities: ["Fast learner", "Responsible", "Reliable"]
};