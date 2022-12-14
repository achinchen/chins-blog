import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetWebFonts from '@unocss/preset-web-fonts';
import transformerDirective from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true
    }),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto+Sans+TC:400,500,700'
      }
    })
  ],
  theme: {
    colors: {
      link: 'var(--link-bg)',
    },
  },
  transformers: [transformerDirective()]
});