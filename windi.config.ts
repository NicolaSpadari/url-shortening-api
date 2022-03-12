import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
    transformCSS: "pre",
    attributify: false,
    darkMode: false,
    extract: {
        include: ["index.html", "src/**/*.{vue,html,js,ts}"],
        exclude: ["node_modules", ".gitignore", ".eslintrc", ".eslintignore", ".env"]
    },
    corePlugins: {
        container: false
    },
    theme: {
        colors: {
            cyan: "#2acfcf",
            violet: "#3b3054",
            red: "#f46262",
            white: "#ffffff",
            gray: "#bfbfbf",
            grayish: "#9e9aa7",
            lightgray: "#eff1f7",
            asphalt: "#35323e",
            dark: "#232127"
        },
        extend: {
            fontFamily: {
                text: ["Poppins", "sans-serif"]
            },
            backgroundImage: {
                "hero-illustration": "url('/illustration-working.svg')",
                "shortener-pattern-desktop": "url('/bg-shorten-desktop.svg')",
                "shortener-pattern-mobile": "url('/bg-shorten-mobile.svg')",
                "boost-pattern-desktop": "url('/bg-boost-desktop.svg')",
                "boost-pattern-mobile": "url('/bg-boost-mobile.svg')"
            },
            inset: {
                unset: "unset"
            }
        }
    }
});
