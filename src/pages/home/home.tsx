import { clipboard } from 'electron'
import dayjs from 'dayjs'
import { useClipboardStore } from '@/store/useClipboard'
import { Card, Avatar, Link, Typography, Space, Tooltip } from '@arco-design/web-react'
import './home.less'

const { Text } = Typography

export default function Home() {
	return <Clipboards />
}

function Clipboards() {
	const clipboards = useClipboardStore((state) => state.clipboard)
	const updateClip = useClipboardStore((state) => state.updateClip)
	const firstItem = useMemo(() => clipboards[0], [clipboards])

	// 监听剪贴板
	useEffect(() => {
		// 每秒监听一次剪贴板
		const interval = setInterval(() => {
			const newContent = clipboard.readText()
			console.log('%c [ newContent ]', 'font-size:13px; background:pink; color:#bf2c9f;', newContent)
			// 如果剪贴板内容为空或者内容等于当前第一条，不处理
			if (!newContent || newContent === firstItem?.content) return

			console.log('%c [  ]', 'font-size:13px; background:pink; color:#bf2c9f;')
			let newClip = {
				content: newContent,
				date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			}
			let index = clipboards.length ? clipboards.findIndex((item) => item.content === newContent) : -1
			if (index === -1) {
				updateClip([newClip, ...clipboards])
			} else {
				clipboards.splice(index, 1)
				updateClip([newClip, ...clipboards])
			}
		}, 1000)
		// 清理函数，在组件卸载时清除定时器
		return () => clearInterval(interval)
	}, [firstItem, clipboards, updateClip])

	return (
		<div className="m4">
			{/* // {clipboard}  key={index} */}
			{clipboards.length
				? clipboards.map((item) => {
						return (
							<Tooltip mini color="white" key={item.content} content={ContentNode(item)}>
								<Card hoverable className="mb-2">
									<div className="ellipsis">{item.content}</div>
								</Card>
							</Tooltip>
						)
				  })
				: undefined}
		</div>
	)
}

const ContentNode = ({ date, content }) => (
	<div className='max-h-50vh  overflow-y-auto text-black px'>
		<div className='py-2 mb-2 b-b b-b-solid b-b-gray-2'>添加日期: {date}</div>
		<span>{content}</span>
	</div>
)
