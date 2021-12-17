import React, { Fragment } from 'react'
import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import NextLink from './NextLink'
import { IItem } from 'typings/component'

const Dropdown = ({ children, toggler }) => {
  return (
    <HeadlessMenu as='div' className='relative inline-block text-left'>
      <HeadlessMenu.Button>{toggler}</HeadlessMenu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <HeadlessMenu.Items className='absolute right-0 min-w-[150px] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {children}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  )
}

const Item = ({ children, Icon, disabled, type, href, onClick, danger }: IItem) => {
  const groupStyle = (active: boolean) =>
    `group flex rounded-md items-center w-full px-2 py-2 text-sm ${
      active ? `${danger ? 'bg-red-700' : 'bg-slate-800'} text-white` : ''
    }`

  const iconStyle = (active: boolean) =>
    `mr-3 h-5 w-5 ${active ? 'text-white' : 'text-gray-400'}`

  return (
    <HeadlessMenu.Item disabled={disabled}>
      {({ active, disabled }) =>
        type === 'link' ? (
          <NextLink href={href} className={groupStyle(active)}>
            {Icon && <Icon className={iconStyle(active)} />}
            {children}
          </NextLink>
        ) : (
          <button onClick={onClick} className={groupStyle(active)}>
            {Icon && <Icon className={iconStyle(active)} />}
            {children}
          </button>
        )
      }
    </HeadlessMenu.Item>
  )
}

const Group = ({ children }) => <div className='p-1'>{children}</div>

Dropdown.Item = Item
Dropdown.Group = Group

export default Dropdown
