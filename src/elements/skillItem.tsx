import { ISkill } from "@/models/skill";
import { JSX } from 'react';


interface ISkillItemProps {
    skill: ISkill
}

export default function SkillItem({ skill }: ISkillItemProps) {
    const hasLevel = skill.level != null;
    const hasLabel = skill.label != null;

    const itemsClass = (it: { link?: string }) =>
        `text-sm font-medium ${it.link ? 'text-link' : 'text-zinc-800'} dark:text-gray-300 break-words`;

    return <div className="flex flex-col gap-2 w-full max-w-md px-4 pb-1">
        <p className="flex">
            {skill.items.map(it => it.link ?
                <a key={it.name} href={it.link} className={itemsClass(it)}>{it.name}.&nbsp;</a> :
                <span key={it.name} className={itemsClass(it)}>{it.name}.&nbsp;</span>
            )}
            {hasLabel &&
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-xs bg-black font-thin text-white dark:bg-white dark:font-medium dark:text-black">
                    {skill.label}
                </span>
            }
        </p>

        {
            hasLevel && (
                <div
                    className="h-1 w-full bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="h-full bg-black dark:bg-white transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(Math.max(skill.level!, 0), 100)}%` }}
                    />
                </div>
            )
        }
    </div >
}