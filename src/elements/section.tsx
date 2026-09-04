import { IStyleable } from "@/types"

interface ISectionProps extends IStyleable {
    name: string,
    withRightLine?: boolean
    children: React.ReactNode
}

export default function Section({ id, name, children, className, withRightLine = false }: ISectionProps) {
    const rightLineClass = withRightLine ?
        ` flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-zinc-300 dark:after:bg-zinc-700` : '';
    const titleClassName = 'text-2xl font-semibold mb-3 mt-4 text-contrast' + rightLineClass;

    return <section id={id} className={className}>
        <h2 className={titleClassName}>{name}</h2>
        <div className="space-y-3">
            {children}
        </div>
    </section>
}