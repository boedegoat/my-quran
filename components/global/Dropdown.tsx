import { Fragment } from 'react'
import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import NextLink from './NextLink'
import { IItem } from 'lib/typings/component'
import { classNames } from 'lib/utils'

const Dropdown = ({ children, toggler }) => {
  const DesktopDropdown = (
    <HeadlessMenu as='div' className='relative inline-block text-left'>
      {({ open }) => {
        return (
          <>
            <HeadlessMenu.Button>{toggler}</HeadlessMenu.Button>
            <Transition as='div' className='relative z-50' show={open}>
              <Transition.Child
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <HeadlessMenu.Items className='absolute right-0 min-w-[150px] max-w-auto mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  {children}
                </HeadlessMenu.Items>
              </Transition.Child>
            </Transition>
          </>
        )
      }}
    </HeadlessMenu>
  )

  const MobileDropdown = (
    <HeadlessMenu as='div' className='relative inline-block text-left'>
      {({ open }) => {
        return (
          <>
            <HeadlessMenu.Button>{toggler}</HeadlessMenu.Button>
            <Transition as='div' className='relative z-50' show={open}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                {/* overlay */}
                <div className='fixed inset-0 bg-black/50' />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 translate-y-10'
                enterTo='transform opacity-100 translate-y-0'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 translate-y-0'
                leaveTo='transform opacity-0 translate-y-10'
              >
                <HeadlessMenu.Items className='fixed bottom-0 left-0 w-full origin-bottom bg-white divide-y divide-gray-100 rounded-t-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  {children}
                </HeadlessMenu.Items>
              </Transition.Child>
            </Transition>
          </>
        )
      }}
    </HeadlessMenu>
  )

  return (
    <>
      <div className='hidden sm:block'>{DesktopDropdown}</div>
      <div className='block sm:hidden'>{MobileDropdown}</div>
    </>
  )
}

const Item = ({ children, Icon, disabled, type, href, onClick, danger }: IItem) => {
  return (
    <HeadlessMenu.Item disabled={disabled}>
      {({ active, disabled }) => {
        const groupStyle = classNames(
          'group flex rounded-md items-center w-full px-2 py-2 text-sm whitespace-nowrap',
          active ? `${danger ? 'bg-red-700' : 'bg-slate-800'} text-white` : ''
        )
        const iconStyle = classNames('mr-3 h-5 w-5', active ? 'text-white' : 'text-gray-400')

        const MenuMap = {
          link: (
            <NextLink href={href} className={groupStyle}>
              {Icon && <Icon className={iconStyle} />}
              {children}
            </NextLink>
          ),
          button: (
            <button onClick={onClick} className={groupStyle}>
              {Icon && <Icon className={iconStyle} />}
              {children}
            </button>
          ),
        }

        return MenuMap[type]
      }}
    </HeadlessMenu.Item>
  )
}

const Group = ({ children }) => <div className='p-3 sm:p-1'>{children}</div>

Dropdown.Item = Item
Dropdown.Group = Group

export default Dropdown
