"use client";

import ConditionalRendering from "@components/detail/ConditionalRendering";
import type { NextPage } from "next";

const Page: NextPage = () => {
    return (
        <>
            <ConditionalRendering />
            <section className='m-4 border-2 inline'>
                <h1 className='text-xl'>Sally Ride's Packing List</h1>
                <ul>
                    <Item isPacked={true} name="Space suit" />
                    <Item isPacked={true} name="Helmet with a golden leaf" />
                    <Item isPacked={false} name="Photo of Tam" />
                    <AndOpertaionTest count={0}/>
                    <AndOpertaionTest count={1}/>
                </ul>
            </section>
        </>
    );
};
export default Page;

const AndOpertaionTest = ({count}: {count: number}) => {

    return (<>
        {count && <li>hihi</li>}
    </>);
}

const Item = ({ name, isPacked }: { name: string; isPacked: boolean }) => {
    if (isPacked) {
        return <li className="p-2 underline">{name} ✔</li>;
      }
      return <li className="p-2 underline">{name}</li>;

      // or 

      return (
        <li className="item">
          {isPacked ? name + ' ✔' : name}
        </li>
      );

      // or 
      return (
        <li className="item">
          {name} {isPacked && '✔'}
        </li>
      );

};
