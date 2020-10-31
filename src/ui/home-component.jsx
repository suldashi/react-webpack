import React from "react";

export function HomeComponent(props) {
    const asyncPromiseTest = async () => {
        return "we made it, async/await works!";
    }
    asyncPromiseTest().then(console.log);
    return <div>We made it home! Edit the <pre>/src/ui/home-component.jsx</pre> file to get started</div>;
}
