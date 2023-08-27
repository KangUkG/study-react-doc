"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
    const router = useRouter();

    return (
        <>
            <header className="w-full fixed h-32 bg-slate-800">
                <button
                    onClick={() => {
                        router.push("/");
                    }}
                    className=""
                >back</button>
            </header>
        </>
    );
};
export default Header;
