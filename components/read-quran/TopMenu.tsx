import { ChevronLeftIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import MotionNextLink from 'components/global/MotionNextLink'
import { motion } from 'framer-motion'
import { childVariants, linkVariants } from 'lib/animations'
import { useToggle } from 'lib/hooks'
import SurahMenu from './SurahMenu'

export default function TopMenu({ allSurah }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false)

  return (
    <motion.div variants={childVariants} className='flex justify-between items-center mb-10'>
      <MotionNextLink
        variants={linkVariants}
        whileHover='hover'
        whileTap='tap'
        href='/read-quran'
        className='inline-flex items-center font-medium text-slate-500 text-sm'
      >
        <ChevronLeftIcon className='w-4 h-4 mr-2' /> Back to Read Quran
      </MotionNextLink>
      <button
        onClick={() => toggleMenuOpen(true)}
        className='p-1 bg-slate-600 text-slate-50 rounded-md hover:bg-slate-800'
      >
        <MenuAlt3Icon className='w-5 h-5' />
      </button>
      <SurahMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} allSurah={allSurah} />
    </motion.div>
  )
}
