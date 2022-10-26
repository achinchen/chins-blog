import type { AttributifyOptions } from '@unocss/preset-attributify';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyOptions {}
  interface SVGAttributes<T> extends AttributifyOptions {}
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}