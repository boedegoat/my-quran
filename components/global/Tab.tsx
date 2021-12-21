import { Tab as HeadlessTab } from '@headlessui/react'
import { classNames } from 'lib/utils'

function TabGroup({ children, ...rest }) {
  return (
    <div {...rest}>
      <HeadlessTab.Group>{children}</HeadlessTab.Group>
    </div>
  )
}

function Head({ children, ...rest }) {
  return (
    <HeadlessTab.List className='flex p-1 space-x-1 bg-slate-300/50 rounded-xl' {...rest}>
      {children}
    </HeadlessTab.List>
  )
}

function Tab({ children, ...rest }) {
  return (
    <HeadlessTab
      className={({ selected }) =>
        classNames(
          'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-400',
          selected
            ? 'bg-slate-900 text-slate-100 shadow'
            : 'text-slate-900 hover:bg-slate-300/70'
        )
      }
      {...rest}
    >
      {children}
    </HeadlessTab>
  )
}

function Contents({ children, ...rest }) {
  return (
    <HeadlessTab.Panels className='mt-5' {...rest}>
      {children}
    </HeadlessTab.Panels>
  )
}

function Content({ children, ...rest }) {
  return <HeadlessTab.Panel {...rest}>{children}</HeadlessTab.Panel>
}

TabGroup.Head = Head
TabGroup.Tab = Tab
TabGroup.Contents = Contents
TabGroup.Content = Content

export default TabGroup
