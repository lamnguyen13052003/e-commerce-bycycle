import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
    data: string;
    setData: (value: string) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<string>('');

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
