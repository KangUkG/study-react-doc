import Link from "next/link";

import { HiCursorArrowRays } from "react-icons/hi2";
import Card from "@components/UI/Card";

export default function Home() {
    return (
        <div className="flex flex-col gap-12 justify-center items-center bg-[#D2CECB]">
            <h1 className="text-9xl animate-bounce">Learn 'REACT'</h1>
            <div className="flex flex-col gap-10">
                <Card className="bg-slate-100 hover:bg-slate-300">
                    <h3 className="text-2xl font-bold pb-6 ">
                        Describing the UI
                    </h3>
                    <ul>
                        <li className="m-2">
                            <Link
                                href={"conditional-rendering"}
                                className="flex items-center gap-2 hover:underline"
                            >
                                <HiCursorArrowRays size={25} />
                                describing-ui/conditional-rendering
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Test />
                <Test />
                <Test />
                <Test />
                <Test />
            </div>
        </div>
    );
}

const Test = () => {
    return (
        <Card className="bg-slate-100 hover:bg-slate-300">
            <h3 className="text-2xl font-bold pb-6 ">Describing the UI</h3>
            <ul>
                <li className="m-2">
                    <Link
                        href={"describing-ui/conditional-rendering"}
                        className="flex items-center gap-2 hover:underline"
                    >
                        <HiCursorArrowRays size={25} />
                        describing-ui/conditional-rendering
                    </Link>
                </li>
            </ul>
        </Card>
    );
};
