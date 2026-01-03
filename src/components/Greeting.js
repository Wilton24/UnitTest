import { useState } from "react";

export default function Greeting() {
    const [changeText, setChangeText] = useState(false);
    return <div>
        <h1>
            Hello, welcome to our website!
        </h1>
        {!changeText && <p>This is the best place to learn React.</p>}
        {changeText && <p>Have a great day!</p>}
        <button onClick={() => setChangeText(!changeText)}>Change Text</button>
    </div>
}