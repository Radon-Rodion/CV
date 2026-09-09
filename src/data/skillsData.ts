import { ISkill } from "@/models/skill";

export const skillsDataRus: ISkill[] = [
    {
        title: "Бекенд",
        items: [
            { name: "ASP.NET Core" },
            { name: "C# (.NET 3.1–10)" }
        ],
        level: 90
    },
    {
        title: "Базы данных",
        items: [
            { name: "PostgreSQL" },
            { name: "MS SQL" },
            { name: "ClickHouse" }
        ],
        level: 75
    },
    {
        title: "API",
        items: [
            { name: "GraphQL" },
            { name: "SignalR" },
            { name: "REST" }
        ],
        level: 75
    },
    {
        title: "Фронтенд",
        items: [
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "React" }
        ],
        level: 90
    },
    {
        title: "Фронтенд-инструменты",
        items: [
            { name: "Next.js" },
            { name: "Redux Toolkit" },
            { name: "Tailwind" },
            { name: "SCSS" }
        ],
        level: 75
    },
    {
        title: "Инструменты и платформы",
        items: [
            { name: "Docker" },
            { name: "GoCD" },
            { name: "Keycloak" },
            { name: "Git" }
        ],
        level: 60
    },
    {
        title: "Тестирование",
        items: [
            { name: "Jest" },
            { name: "xUnit" },
            { name: "MSTest" }
        ],
        level: 50
    },
    {
        title: "ИИ / LLM",
        items: [
            { name: "LLM integration" },
            { name: "RAG" }
        ],
        level: 70
    },
    {
        title: "Знаком с",
        items: [
            { name: "Kafka" },
            { name: "Redis" },
            { name: "ELK" }
        ],
        level: 40
    }
];

export const skillsDataEng: ISkill[] = [
    ...skillsDataRus
];