'use client'

import { labelsRus } from "@/data/labels";
import { ILabels } from "@/models/labels";
import { createContext } from "react";

export const LabelsContext = createContext(labelsRus);

interface ILabelsContextProviderProps {
    children: React.ReactNode,
    labels: ILabels
}

export default function LabelsContextProvider({ children, labels }: ILabelsContextProviderProps) {
    return <LabelsContext.Provider value={labels}>
        {children}
    </LabelsContext.Provider>
}