import { IExperience } from "@/models/experience";

export const experienceDataRus: IExperience = {
    company: "ООО «Б1-Диджитал»",
    companyDescription: "Внутренняя IT-разработка для сфер аудита, налогов и консалтинга",
    period: "Сентябрь 2022 — по настоящее время (4 года)",
    role: "Full-Stack разработчик",
    techStack: [
        "C# / .NET (Core 3.1, 5–10)", "ASP.NET Core",
        "PostgreSQL", "MS SQL Server", "ClickHouse",
        "GraphQL", "REST", "SignalR",
        "Docker", "GoCD (CI/CD)",
        "Node.js", "TypeScript", "React", "Next.js (App Router)",
        "Redux Toolkit", "Jest",
        "Git", "Gitea",
        "LLM integration", "RAG"
    ],
    projects: [
        {
            title: "ИИ-автоматизация разработки: Orchestrator",
            period: "Май 2026 — по настоящее время",
            stack: ["LLM", "Node.js", "TypeScript", "JSDoc", "Jest", "Gitea"],
            achievements: [
                "Разработал ИИ-конвейер (pipeline), который анализирует AST проекта, автоматически генерирует JSDoc и тесты (Jest), строит UML-диаграммы и выполняет рефакторинг.",
                "Оптимизировал алгоритмы передачи контекста в LLM-агент, что позволило эффективно работать в условиях ограниченного контекстного окна и сократило ошибки ИИ с более чем 30% до 1–2% после валидации.",
                "Интегрировал инструмент в корпоративный инстанс Gitea, автоматизировав создание изолированных Git-веток под каждую задачу рефакторинга, а также проверку результатов посредством компиляции и тестов перед пушем (с передачей ошибок на доработку ИИ-агенту)."
            ]
        },
        {
            title: "ИИ-агент с раздельными базами знаний",
            period: "Февраль 2026 — Май 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "OAuth 2.0", "RAG", "LLM", "GraphQL", "Docker", "Next.js (App Router)", "React", "Redux Toolkit", "Tailwind"],
            achievements: [
                "Спроектировал и разработал архитектуру клиентской части (Frontend) интеллектуального агента.",
                "Разработал отказоустойчивый сервис синхронизации баз знаний (RAG) с внешними источниками информации через GraphQL-запросы.",
                "Интегрировал авторизацию по OAuth 2.0 и настроил безопасную сквозную синхронизацию контроля доступа.",
                "Координировал разработку в команде из 5 человек (.NET/React), организовал регулярные cross-stack code review и менторинг."
            ]
        },
        {
            title: "Система сертификации сотрудников",
            period: "Октябрь 2024 — Февраль 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "ClickHouse", "SignalR", "Docker", "GoCD (CI/CD)", "React", "Vite", "Redux", "REST API", "SCSS-модули"],
            achievements: [
                "Вносил вклад в сквозное проектирование и разработку корпоративной системы (БД, Backend и Frontend).",
                "Разработал архитектуру передачи данных в реальном времени: первичное получение данных через HTTP REST API и динамическое обновление интерфейсов через SignalR.",
                "Спроектировал и внедрил интеграцию с другими внутренними системами компании.",
                "Выделил слой абстракций для работы с бизнес-данными в отдельную NPM-библиотеку и NuGet-пакет, что сократило время разработки последующих внутренних интеграций на 30%.",
                "Провел онбординг и адаптацию Junior-разработчиков на проекте, распределял задачи и обеспечивал качество кода через ревью."
            ]
        },
        {
            title: "Система архивного хранения и электронного документооборота",
            period: "Сентябрь 2022 — Октябрь 2024",
            stack: ["ASP.NET Core", "MS SQL", "MVC", "Razor Pages", "jQuery", "TUS"],
            achievements: [
                "Провел масштабный рефакторинг Legacy-кода и обновил целевую платформу с .NET Core 3.1 до .NET 8.",
                "Внедрил протокол TUS для возобновляемой загрузки крупных файлов (от 2 Гб), чтобы предотвратить обрывы сессий и timeout’ы при медленном/нестабильном соединении.",
                "Оптимизировал работу с данными: реализовал потоковое чтение массивов по HTTP и динамическую подгрузку списков при скроллинге (пагинацию), ускорив отклик сервера БД с нескольких минут до 1–2 секунд.",
                "Переписал модуль почтовых уведомлений, мигрировав с устаревшего EWS на SMTP, что повысило стабильность доставки уведомлений."
            ]
        }
    ],
    crossCutting: {
        title: "Разработка внутренних корпоративных платформ",
        description: "Параллельно с проектной работой инициировал создание и поддерживал общую экосистему библиотек:",
        items: [
            "Разработал и развивал корпоративные npm-библиотеки (кастомные React-компоненты, специализированные React-хуки, а также надёжный HTTP-клиент на базе XHR/Fetch с интерцепторами запросов/ответов).",
            "Разработал NuGet-библиотеку авторизации OAuth 2.0 с использованием Keycloak, принятую в качестве стандартного решения для аутентификации в новых проектах компании.",
            "Создал NuGet-библиотеку для автоматической фильтрации, сортировки и пагинации данных из БД через деревья выражений (Expression Trees) для интеграции с UI-компонентами (MUI DataGrid)."
        ]
    }
};

export const experienceDataEng: IExperience = {
    ...experienceDataRus,
    company: "B1 Digital LLC",
    companyDescription: "In-house IT development for audit, tax, and consulting sectors",
    period: "September 2022 — Present (4 years)",
    role: "Full-Stack Software Engineer",
    projects: [
        {
            title: "AI Development Automation Orchestrator",
            period: "May 2026 — Present",
            stack: ["LLM", "Node.js", "TypeScript", "JSDoc", "Jest", "Gitea"],
            achievements: [
                "Engineered an AI pipeline that analyzes project AST, automatically generates JSDoc and Jest tests, generates UML diagrams, and performs code refactoring.",
                "Optimized context delivery algorithms for the AI agent, enabling efficient performance within limited LLM context windows and reducing AI errors from over 30% to 1–2% after validation.",
                "Integrated the tool into the corporate Gitea instance, automating isolated Git branch creation for each refactoring task and verifying results via compilation and testing before pushing (routing errors back to the AI agent for iterative refinement)."
            ]
        },
        {
            title: "AI Agent with Isolated Knowledge Bases",
            period: "February 2026 — May 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "OAuth 2.0", "RAG", "LLM", "GraphQL", "Docker", "Next.js (App Router)", "React", "Redux Toolkit", "Tailwind"],
            achievements: [
                "Designed and developed the frontend architecture for the AI agent application.",
                "Developed a fault-tolerant service for synchronizing knowledge bases (RAG) with external data sources using GraphQL queries.",
                "Integrated OAuth 2.0 authentication and configured secure end-to-end access-control synchronization.",
                "Coordinated development within a 5-person .NET/React team, establishing regular cross-stack code reviews and providing mentorship."
            ]
        },
        {
            title: "Employee Certification System",
            period: "October 2024 — February 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "ClickHouse", "SignalR", "Docker", "GoCD (CI/CD)", "React", "Vite", "Redux", "REST API", "SCSS Modules"],
            achievements: [
                "Contributed to the end-to-end architecture design and development of the enterprise system (DB, Backend and Frontend).",
                "Designed and developed a real-time data delivery architecture combining initial data retrieval via HTTP REST API with dynamic UI updates via SignalR.",
                "Architected and implemented integrations with other internal company systems.",
                "Extracted business data layer into a dedicated standalone NPM library and NuGet package, reducing development time for subsequent internal integrations by 30%.",
                "Onboarded and mentored junior developers on the project, distributing tasks and ensuring code quality through reviews."
            ]
        },
        {
            title: "Archival Storage and Electronic Document Management System",
            period: "September 2022 — October 2024",
            stack: ["ASP.NET Core", "MS SQL", "MVC", "Razor Pages", "jQuery", "TUS"],
            achievements: [
                "Performed extensive refactoring of legacy code and upgraded the target framework from .NET Core 3.1 to .NET 8.",
                "Implemented the TUS protocol for resumable large-file uploads (2GB+) to prevent session drops and timeouts over slow or unstable connections.",
                "Optimized data handling by implementing HTTP streaming for large datasets and infinite scroll (dynamic pagination), reducing database server response time from several minutes to 1–2 seconds.",
                "Rewrote the mail notification module, migrating from legacy EWS to SMTP, which enhanced notification delivery reliability."
            ]
        }
    ],
    crossCutting: {
        title: "Internal Enterprise Platform Development",
        description: "In parallel with project work, initiated and maintained a shared library ecosystem:",
        items: [
            "Developed and maintained corporate npm libraries, including custom React components, specialized React hooks, and a robust HTTP client built on XHR/Fetch featuring request/response interceptors.",
            "Developed a NuGet OAuth 2.0 authentication library integrated with Keycloak, adopted as the standard authentication solution for new company projects.",
            "Created a NuGet library for automated database filtering, sorting, and pagination via Expression Trees, enabling integration with frontend UI components (MUI DataGrid)."
        ]
    }
};