import { IExperience } from "@/models/experience";


export const experienceDataRus: IExperience = {
    company: "ООО «Б1-Диджитал»",
    companyDescription: "Внутренняя IT-разработка для сфер аудита, налогов и консалтинга",
    period: "Сентябрь 2022 — по настоящее время (4 года)",
    role: "Ведущий инженер-программист (FullStack разработчик)",
    techStack: [
        ".NET (Core 3.1 - 10)", "ASP.NET Core", "PostgreSQL", "MS SQL",
        "Node.js", "TypeScript", "React", "Next.js (App Router)",
        "Redux Toolkit", "GraphQL", "SignalR", "REST API",
        "LLM", "RAG", "Jest", "Git", "Gitea"
    ],
    projects: [
        {
            title: "ИИ-автоматизация разработки",
            period: "Май 2026 — по н. в.",
            stack: ["Node.js", "TypeScript", "LLM", "JSDoc", "Jest", "Gitea"],
            achievements: [
                "Разработал ИИ-конвейер (pipeline), который анализирует AST проекта, автоматически генерирует JSDoc и тесты (Jest), строит UML-диаграммы и выполняет рефакторинг.",
                "Оптимизировал алгоритмы передачи контекста в LLM-агент, что позволило эффективно работать в условиях ограниченного контекстного окна и сократило ошибки ИИ до 1-2%.",
                "Интегрировал инструмент в корпоративный репозиторий Gitea, автоматизировав создание изолированных Git-веток под каждую задачу рефакторинга, а также проверку результатов посредством компиляции и тестов перед пушем (с передачей ошибок на доработку ИИ-агенту)."
            ]
        },
        {
            title: "ИИ-агент с раздельными базами знаний",
            period: "Февраль 2026 — Май 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "RAG", "LLM", "GraphQL", "Next.js (App Router)", "React", "Redux Toolkit", "Tailwind"],
            achievements: [
                "Руководил проектированием и разработкой клиентской части (Frontend) интеллектуального агента.",
                "Разработал отказоустойчивый сервис синхронизации баз знаний (RAG) с внешними источниками информации через GraphQL-запросы.",
                "Интегрировал авторизацию по OAuth 2.0 и настроил безопасную сквозную синхронизацию прав доступа.",
                "Организовал эффективную командную разработку (5 человек: .NET и React): проводил регулярное cross-code-review и менторинг."
            ]
        },
        {
            title: "Система сертификации сотрудников",
            period: "Октябрь 2024 — Февраль 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "SignalR", "React", "Vite", "Redux", "REST API", "SCSS-модули"],
            achievements: [
                "Участвовал в полном цикле проектирования и разработки корпоративной системы (БД, Backend, Frontend).",
                "Разработал архитектуру передачи данных в реальном времени: первичное получение через HTTP REST API и динамическое обновление интерфейсов по протоколу SignalR.",
                "Спроектировал и внедрил интеграцию с другими внутренними системами компании.",
                "Выделил слой абстракций для работы с бизнес-данными на фронтенде в отдельную NPM-библиотеку, что сократило время разработки последующих интерфейсов компании на 30%.",
                "Провел онбординг и адаптацию Junior-разработчиков на проекте, распределял задачи и контролировал качество их кода."
            ]
        },
        {
            title: "Система архивного хранения и электронного документооборота",
            period: "Сентябрь 2022 — Октябрь 2024",
            stack: ["ASP.NET Core", "MS SQL", "MVC", "Razor Pages", "jQuery", "TUS"],
            achievements: [
                "Провел глубокий рефакторинг Legacy-кода и планомерно обновил целевую платформу с .NET Core 3.1 до современной .NET 8.",
                "Внедрил протокол TUS для гарантированной загрузки тяжелых файлов (от 2 Гб), что устранило обрывы сессий и timeout’ы при медленном/нестабильном соединении.",
                "Оптимизировал работу с данными: реализовал потоковое чтение массивов по HTTP и динамическую подгрузку списков при скроллинге (пагинацию), снизив нагрузку на сервер БД.",
                "Переписал почтовый подсистемный модуль с устаревшего EWS на SMTP, повысив стабильность доставки уведомлений."
            ]
        }
    ],
    crossCutting: {
        title: "Сквозная деятельность (Разработка внутренних платформ компании)",
        description: "Параллельно с проектной деятельностью инициировал создание и поддерживал общую экосистему библиотек:",
        items: [
            "Разработал и развивал корпоративные NPM-библиотеки (кастомные React-компоненты, специализированные React-хуки, а также продвинутый клиент HTTP-запросов на базе XHR/Fetch с пред- и пост-обработчиками).",
            "Разработал NuGet-библиотеку авторизации OAuth 2.0 с использованием KeyCloak, ставшую стандартом безопасности во всех новых проектах компании.",
            "Создал NuGet-библиотеку для автоматической фильтрации, сортировки и пагинации данных из БД через деревья выражений (Expression Trees) для бесшовной интеграции с UI-компонентами (MUI Datagrid)."
        ]
    }
};

export const experienceDataEng: IExperience = {
    ...experienceDataRus,
    company: "B1 Digital LLC",
    companyDescription: "In-house IT development for audit, tax, and consulting sectors",
    period: "September 2022 — Present (4 years)",
    role: "Software Engineer (FullStack Developer)",
    projects: [
        {
            title: "AI-Driven Development Automation",
            period: "May 2026 — Present",
            stack: ["Node.js", "TypeScript", "LLM", "JSDoc", "Jest", "Gitea"],
            achievements: [
                "Engineered an AI pipeline that analyzes project AST, automatically generates JSDoc and Jest tests, maps UML diagrams, and performs code refactoring.",
                "Optimized context delivery algorithms for the AI agent, enabling efficient performance within constrained context windows and reducing AI errors to 1-2%.",
                "Integrated the tool into the corporate Gitea repository, automating isolated Git branch creation for each refactoring task and verifying results via compilation and testing before pushing (routing errors back to the AI agent for iterative refinement)."
            ]
        },
        {
            title: "AI Agent with Isolated Knowledge Bases",
            period: "February 2026 — May 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "RAG", "LLM", "GraphQL", "Next.js (App Router)", "React", "Redux Toolkit", "Tailwind"],
            achievements: [
                "Led the architecture design and development of the AI agent's frontend application.",
                "Developed a fault-tolerant service for synchronizing knowledge bases (RAG) with external data sources using GraphQL queries.",
                "Integrated OAuth 2.0 authentication and configured secure end-to-end access rights synchronization.",
                "Orchestrated development within a 5-person team (.NET and React), establishing regular cross-code reviews and providing mentorship."
            ]
        },
        {
            title: "Employee Certification System",
            period: "October 2024 — February 2026",
            stack: ["ASP.NET Core", "PostgreSQL", "SignalR", "React", "Vite", "Redux", "REST API", "SCSS Modules"],
            achievements: [
                "Participated in the full-cycle architecture design and development of the enterprise system (DB, Backend, Frontend).",
                "Designed and developed a real-time data transfer architecture combining initial retrieval via HTTP REST API with dynamic UI updates over the SignalR protocol.",
                "Architected and implemented integrations with other internal company systems.",
                "Extracted the frontend business data abstraction layer into a dedicated standalone NPM library, reducing development time for subsequent company interfaces by 30%.",
                "Onboarded and mentored junior developers on the project, allocating tasks and ensuring code quality through reviews."
            ]
        },
        {
            title: "Archival Storage and Electronic Document Management System",
            period: "September 2022 — October 2024",
            stack: ["ASP.NET Core", "MS SQL", "MVC", "Razor Pages", "jQuery", "TUS"],
            achievements: [
                "Executed deep refactoring of legacy code and systematically upgraded the target framework from .NET Core 3.1 to modern .NET 8.",
                "Implemented the TUS protocol for resumable big-file uploads (2GB+), eliminating session drops and timeouts over slow or unstable connections.",
                "Optimized data handling by implementing HTTP streaming for large datasets and infinite scroll (dynamic pagination), significantly reducing database server load.",
                "Rewrote the email subsystem module, migrating from deprecated EWS to SMTP, which enhanced notification delivery reliability."
            ]
        }
    ],
    crossCutting: {
        title: "Cross-Cutting Activities (Internal Enterprise Platform Development)",
        description: "In parallel with project tasks, initiated and maintained a shared library ecosystem:",
        items: [
            "Developed and maintained corporate NPM libraries, including custom React components, specialized React hooks, and an advanced HTTP client built on XHR/Fetch featuring pre- and post-request interceptors.",
            "Developed a NuGet OAuth 2.0 authentication library integrated with Keycloak, which became the security standard for all new company projects.",
            "Created a NuGet library for automated database filtering, sorting, and pagination via Expression Trees, enabling seamless integration with frontend UI components (MUI DataGrid)."
        ]
    }
};