/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
colors: {
gold: '#facc15',
'dark-bg': '#0a0a0a',
'card-bg': '#1f2937',
}
},
},
plugins: [],
}
