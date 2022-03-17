import { ChevronLeftIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import MotionNextLink from 'components/global/MotionNextLink'
import { AnimatePresence, motion } from 'framer-motion'
import { childVariants, linkVariants } from 'lib/animations'
import { useOnTopPage, useScrollDirection, useToggle } from 'lib/hooks'
import SurahMenu from './SurahMenu'

export default function TopMenu({ allSurah }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false)
  const scrollDir = useScrollDirection()
  const onTop = useOnTopPage()

  return (
    <motion.div variants={childVariants} className='flex justify-between items-center mb-10'>
      {/* back link */}
      <MotionNextLink
        variants={linkVariants}
        whileHover='hover'
        whileTap='tap'
        href='/read-quran'
        className='inline-flex items-center font-medium text-slate-500 text-sm'
      >
        <ChevronLeftIcon className='w-4 h-4 mr-2' /> Back to Read Quran
      </MotionNextLink>

      {/* menu btn */}
      <button
        onClick={() => toggleMenuOpen(true)}
        className='p-1 bg-slate-600 text-slate-50 rounded-md hover:bg-slate-800'
      >
        <MenuAlt3Icon className='w-5 h-5' />
      </button>

      <AnimatePresence>
        {scrollDir === 'up' && !onTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => toggleMenuOpen(true)}
            className='p-1 bg-slate-800/50 backdrop-blur-sm text-slate-50 rounded-md hover:bg-slate-800 fixed z-10 bottom-28 right-8 shadow-2xl shadow-slate-900'
          >
            <MenuAlt3Icon className='w-10 h-10' />
          </motion.button>
        )}
      </AnimatePresence>
      <SurahMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} allSurah={allSurah} />
    </motion.div>
  )
}
