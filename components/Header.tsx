"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
    const router = useRouter();

    return (
        <>
            <header className="w-full fixed h-32">
                <button
                    onClick={() => {
                        router.push("/");
                    }}
                >back</button>
            </header>
        </>
    );
};
export default Header;
