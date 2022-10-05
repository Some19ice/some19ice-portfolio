/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                burtons: "burtons",
                operatorMono: "operatorMono",
                operatorMonoBold: "operatorMonoBold",
                operatorMonoBook: "operatorMonoBook",
                operatorMonoMedium: "operatorMonoMedium",
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
}
