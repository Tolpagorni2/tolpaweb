import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [{
    name: 'local-design-preview',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'dev') {
          injectRoute({ pattern: '/design-preview', entrypoint: './src/previews/homepage.astro' });
          injectRoute({ pattern: '/design-preview/content/[...id]', entrypoint: './src/previews/content.astro' });
          for (const section of ['knowledge', 'research', 'magnus-meets', 'library']) {
            injectRoute({ pattern: `/design-preview/${section}`, entrypoint: './src/previews/archive.astro' });
          }
        }
      },
    },
  }],
});
