import { SearchIcon } from '@heroicons/react/solid'
import { classNames } from 'lib/utils'

export default function SearchBar({ className = null, ...rest }) {
  return (
    <div
      className={classNames(
        'flex bg-slate-100/60 justify-between items-center px-3 py-2 rounded-lg shadow-sm focus-within:shadow-md focus-within:bg-white transition-colors',
        className
      )}
    >
      <input className='w-full bg-transparent focus:outline-none' type='text' {...rest} />
      <SearchIcon className='w-4 h-4 text-slate-500' />
    </div>
  )
}
