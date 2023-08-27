import Header from "@components/Header";
import { ReactNode } from "react";


const DescribingUILayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <Header/>
            <section className="pt-32 w-full h-4/5 bg-slate-400">{children}</section>
        </>
    );
}
export default DescribingUILayout;