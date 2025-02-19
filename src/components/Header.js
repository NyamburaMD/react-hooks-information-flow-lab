import React, { useState } from "react";
function Header({onDarkModeClick}) {
    return (
        <header>
            <h1>App Name</h1>
            <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
        </header>
    );
}
export default Header;