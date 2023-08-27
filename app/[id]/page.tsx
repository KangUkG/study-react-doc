"use client";

import Markdown from "@markdown/core/Markdown";
import type { NextPage } from "next";

const Page: NextPage<{ params : { id: string; }}> = ({ params }) => {
    return (
        <>
            {/* <Markdown fileName="responding-to-event"/> */}
            <h1>hello, Dynamic Page!</h1>
            <p>id :: {params.id}</p>
        </>
    );
};
export default Page;