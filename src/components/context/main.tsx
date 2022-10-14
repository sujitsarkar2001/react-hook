import React, { createContext, useState } from "react";

interface DesignationContext {
    name: string,
    designation: string,
    office_time: string
}

export const UserContext = createContext<string>('');
export const DesignationContext = createContext<DesignationContext | null>(null);

interface Props {
    children: JSX.Element
}

export const MainContext: React.FC<Props> = ({ children }) => {

    const sampleDesignationContext: DesignationContext = {
        name: 'Sujit Sarkar',
        designation: 'Developer',
        office_time: '12pm-8pm'
    };

    const [user, setUser] = useState<DesignationContext>(sampleDesignationContext);

    const updateUser = (key, value) => setUser({ ...user, [key]: value })

    return (
        <UserContext.Provider value={user.name}>
            <DesignationContext.Provider value={{ user, updateUser }}>
                { children }
            </DesignationContext.Provider>
        </UserContext.Provider>
    );
}
