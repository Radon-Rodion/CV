

interface IQualityItemProps {
    quality: string
}

export default function QualityItem({ quality }: IQualityItemProps) {
    return <div className="border-1 border-solid bg-zinc-200 dark:bg-zinc-800 rounded-xl py-1 px-2 w-fit">
        {quality}
    </div>;
}