import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // 定义边框圆角
    'br-t': 'rounded-t-[var(--br-t)]',
    'br-b': 'rounded-b-[var(--br-b)]',
    'br-l': 'rounded-l-[var(--br-l)]',
    'br-r': 'rounded-r-[var(--br-r)]',
    'br-tl': 'rounded-tl-[var(--br-tl)]',
    'br-tr': 'rounded-tr-[var(--br-tr)]',
    'br-bl': 'rounded-bl-[var(--br-bl)]',
    'br-br': 'rounded-br-[var(--br-br)]',
    'ellipsis': 'truncate',
    'flex-col': 'flex flex-col',
    'flex-row': 'flex flex-row',
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-around': 'flex items-center justify-around',
    'flex-evenly': 'flex items-center justify-evenly',
    'flex-start': 'flex items-start justify-start',
    'flex-end': 'flex items-end justify-end',
  },
})
