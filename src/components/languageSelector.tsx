'use client'
import { DataLang } from "@/data";
import { useRouter } from "next/navigation";


interface ILanguageSelectorProps {
    languages: DataLang[],
    currentLang: DataLang
}

export function LanguageSelector({ languages, currentLang }: ILanguageSelectorProps) {
    const router = useRouter();

    return <select id="localization" name="localization" value={currentLang}
        onChange={(e) => router.push(`/${e.target.value}`)}
        className="absolute top-0 right-0">
        {languages.map(l =>
            <option key={l} id={l} value={l} className="dark:bg-zinc-500 dark:text-black">
                {l}
            </option>)
        }
    </select>
}