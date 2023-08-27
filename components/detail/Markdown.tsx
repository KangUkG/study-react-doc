"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const Markdown = ({ fileName }: { fileName: string; }) => {
    const [MD, setMD] = useState<string>("loading...");
    // const fileName = "conditional-rendering.md";
    useEffect(() => {
        // @markdown/${fileName}
        import(`../../markdown/${fileName}.md`)
            .then((res) => {
                console.log(res);
                setMD(res.default);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={MD}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            style={materialDark}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        />
    );
};
export default Markdown;
