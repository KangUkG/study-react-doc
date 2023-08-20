import React from "react";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`rounded-md shadow-lg hover:shadow-xl ease-in duration-300 ${className ?? ''}`}>
            <div className="p-8">{children}</div>
        </div>
    );
};
export default Card;

// box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
// box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
