import { createContext } from "react";

const ThemeContext = createContext({
    mode: 'light',
    value: 'bg-white-500 text-gray-800'
});

export default ThemeContext;