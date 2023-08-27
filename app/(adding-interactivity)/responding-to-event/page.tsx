"use client";

import Example from "@components/UI/Example";
import Markdown from "@components/detail/Markdown";
import type { NextPage } from "next";

const Page: NextPage = () => {
    return (
        <div className="w-4/5 mx-auto my-0">
            <Markdown fileName="responding-to-event"/>
            <Example>
              <h1>hihii Test</h1>
            </Example>
          
        </div>
    );
};
export default Page;