import Header from "@components/Header";
import { ReactNode } from "react";


const DescribingUILayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <Header/>
            <section className="pt-32">{children}</section>
        </>
    );
}
export default DescribingUILayout;