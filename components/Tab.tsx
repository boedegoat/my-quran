import { Tab as HeadlessTab } from '@headlessui/react'

function TabGroup({ children, ...rest }) {
  return (
    <div {...rest}>
      <HeadlessTab.Group>{children}</HeadlessTab.Group>
    </div>
  )
}

function Head({ children, ...rest }) {
  return <HeadlessTab.List {...rest}>{children}</HeadlessTab.List>
}

function Tab({ children, ...rest }) {
  return <HeadlessTab {...rest}>{children}</HeadlessTab>
}

function Contents({ children, ...rest }) {
  return <HeadlessTab.Panels {...rest}>{children}</HeadlessTab.Panels>
}

function Content({ children, ...rest }) {
  return <HeadlessTab.Panel {...rest}>{children}</HeadlessTab.Panel>
}

TabGroup.Head = Head
TabGroup.Tab = Tab
TabGroup.Contents = Contents
TabGroup.Content = Content

export default TabGroup
