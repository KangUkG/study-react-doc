
import Example from "@components/UI/Example";
import Markdown from "@markdown/core/Markdown";
import type { NextPage } from "next";

// https://react.dev/learn/state-as-a-snapshot
const Page: NextPage = () => {

    return (
        <div className="w-4/5 mx-auto my-0">
            <Markdown fileName="state-as-a-snapshot" />            
        </div>
    );
};
export default Page;
