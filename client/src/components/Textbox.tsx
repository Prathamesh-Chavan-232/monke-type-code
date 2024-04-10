import { useState } from "react";

type Props = {
    text: string;
};

const Textbox = ({ text }: Props) => {
    const [typedText, setTypedText] = useState("");
    return (
        <div className="textbox">
            <div className="relative lookup-textbox">
                <div className="typing-textbox">
                    <p>{text}</p>
                    <input
                        className="bg-transparent m-16 p-2 h-24 w-24 typing-input"
                        type="text"
                        onChange={(e) => setTypedText(e.target.value)}
                    />
                    <p className="typed-text overlay">{typedText}</p>
                    <div className="cursor blinking overlay"></div>
                </div>
            </div>
        </div>
    );
};

export default Textbox;
