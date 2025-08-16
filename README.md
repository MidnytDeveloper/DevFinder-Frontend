# DevFInder

- Created a Vite + React

<!-- - install tailwind -->

- go to tailwind document and in document(https://v3.tailwindcss.com/docs/guides/vite)
  --> Using React

  --> install using these commands : 

  1) npm install -D tailwindcss@3 postcss autoprefixer 
  2) npx tailwindcss init -p
  --> go to tailwind.config.js 
  1) delete old code and pase new code -
  2) paste this code:
      /** @type {import('tailwindcss').Config} */
  export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }

  --->
in index.css
paste :
 @tailwind base;
@tailwind components;
@tailwind utilities;


<!-- DAISY UI -->

command to install -
npm i -D daisyui@latest

go to tailwinf.config.js and replace old code with new one:

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
