"use client";

import Example from "@components/UI/Example";
import Markdown from "@markdown/core/Markdown";
import type { NextPage } from "next";

const Page: NextPage = () => {
    const on1Handler = () => {
        alert("clicked!");
    };

    return (
        <div className="w-4/5 mx-auto my-0">
            <Markdown fileName="responding-to-event" />
            <Example title="Add 'onClick' Event">
                <button
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={on1Handler}
                >
                    click me!
                </button>
            </Example>

            
        </div>
    );
};
export default Page;
