/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "neue-haas": ['"Neue Haas Unica Pro"', "sans-serif"],
                "silka-mono": ['"Silka Mono"', "monospace"],
            },
        },
    },
    plugins: [],
};
