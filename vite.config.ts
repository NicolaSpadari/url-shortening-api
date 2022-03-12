import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

import type { Resolver } from "unplugin-auto-import/dist/types";

const compositionResolver: Resolver = (name) => {
	const isCompositionApi = name.startsWith("use");
	if (isCompositionApi) {
        return `@/composables/${name}`;
	}
};

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@types": resolve(__dirname, "./src/types"),
            "@components": resolve(__dirname, "./src/components"),
            "@composables": resolve(__dirname, "./src/composables")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/]
        }),
        WindiCSS(),
        Components({
            extensions: ["vue"],
            dirs: ["src/components"],
            deep: false
        }),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core",
                {
                    axios: [["default", "axios"]]
                }
            ],
            resolvers: [compositionResolver],
            dts: "src/auto-imports.d.ts"
        })
    ],
    server: {
        fs: {
            strict: true,
            allow: [".."]
        },
        host: true
    },
    optimizeDeps: {
        include: [
            "vue",
            "@vueuse/core"
        ]
    }
});
