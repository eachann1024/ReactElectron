import { Radio } from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'
import { useSettingsStore } from '@/store/useSettings'

function RadioGroup() {
  const navList = useSettingsStore(state => state.navList)

  return (
    <Radio.Group mode="fill" type="button" defaultValue="small" options={navList}>
    </Radio.Group>
  )
}

function SettingGroup() {
  return (
    <label className="px-2 text-[var(--color-text-2)] bg-transparent">
      <IconSettings />
    </label>
  )
}

export default function AppHeader() {
  return (
    <div className="w-full flex-between">
      <RadioGroup />
      <SettingGroup />
    </div>
  )
}
