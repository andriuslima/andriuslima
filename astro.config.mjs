import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://www.andriuslima.com",
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true,
        },
    },
});
