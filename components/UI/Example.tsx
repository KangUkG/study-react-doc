import React from "react";

const Example: React.FC<{ children: React.ReactNode; title: string }> = ({
    children,
    title,
}) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-2/3 py-4">
                    <h1 className="text-2xl font-extrabold">{title}</h1>
                </div>
                <div className="w-2/3 bg-zinc-200 rounded-lg">
                    <div className="p-8">{children}</div>
                </div>
            </div>
        </div>
    );
};
export default Example;
