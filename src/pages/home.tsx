import { clipboard } from 'electron'
import { useClipboardStore } from '@/store/useClipboard'

export default function Home() {
  return (
    <div>
      <h1>0011HELLO</h1>
      <Clipboards />
    </div>
  )
}

function Clipboards() {
  const clipboards = useClipboardStore(state => state.clip)
  const updateClip = useClipboardStore(state => state.updateClip)
  const firstText = useMemo(() => clipboards[0] || undefined, [clipboards])

  useEffect(() => {
    const interval = setInterval(() => {
      const readText = clipboard.readText()

      if (readText !== firstText) {
        console.log('%c -> readText', 'font-size:13px; background:pink; color:#bf2c9f', readText, firstText)
        // 添加到数组前面
        const newClip = [readText, ...clipboards]
        updateClip(newClip)
      }
    }, 1000)
    // 清理函数，在组件卸载时清除定时器
    return () => clearInterval(interval)
  }, [firstText, clipboards, updateClip])

  return (
    <>
      <ul>
        {clipboards.map((clipboard, index) => (<li key={index}>{clipboard}</li>))}
      </ul>
    </>
  )
}
