import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchCheck() {
  const [enabled, setEnabled] = useState(false)

  return (
      <Switch
        title='stealth-mode'
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-500'}
          relative inline-flex h-[6px] w-[25px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : '-translate-x-1'}
            pointer-events-none  -translate-y-1 inline-block h-[10px] w-[10px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
  )
}
