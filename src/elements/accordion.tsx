'use client'

import { useState } from "react";

interface IAccordionProps {
    title: React.ReactNode;
    children?: React.ReactNode;
}

export default function Accordion({ title, children }: IAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="flex">
        <div className="relative -left-[31px] sm:-left-[35px] top-1.5 min-w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600 border-2 border-white dark:border-zinc-950" />
        <article className="w-full overflow-hidden bg-white dark:bg-black">
            {/* Кнопка триггера */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left cursor-pointer font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 dark:text-gray-100 dark:bg-black dark:hover:bg-gray-950 transition-colors"
            >
                <span>
                    {title}
                </span>
                <svg
                    className={`h-5 min-w-5 mr-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Анимированный контейнер контента */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
            >
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </article>
    </div>;
}