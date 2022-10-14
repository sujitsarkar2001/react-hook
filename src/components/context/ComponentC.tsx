import React, { useContext } from "react";
import { DesignationContext } from "./main";

interface GlobalContent {
    user: {
        name: string,
        designation: string,
        office_time: string
    },
    updateUser:(key: string, value: string) => void
}

const ComponentC : React.FC = () => {
    
    const { user, updateUser } = useContext<GlobalContent>(DesignationContext)

    return (
        <div className="mb-5 space-y-3">
            <div>
                User context value {user.name} and designation {user.designation}
            </div>
            
            <input type="text" value={user.name} onChange={(e) => updateUser('name', e.target.value)} className="bg-gray-200 p-2 w-full" />
            <input type="text" value={user.designation} onChange={(e) => updateUser('designation', e.target.value)} className="bg-gray-200 p-2 w-full" />
            <input type="text" value={user.office_time} onChange={(e) => updateUser('office_time', e.target.value)} className="bg-gray-200 p-2 w-full" />
        </div>
    );
}

export default ComponentC;