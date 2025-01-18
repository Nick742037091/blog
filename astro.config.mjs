// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nick-h.netlify.app',
  integrations: [react()]
})