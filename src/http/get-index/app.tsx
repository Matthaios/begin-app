import React from "https://unpkg.com/es-react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            p: any;
        }
    }
}

export function App() {
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus?</p>
}