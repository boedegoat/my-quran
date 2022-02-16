import Modal from 'components/global/Modal'
import MotionNextLink from 'components/global/MotionNextLink'
import NextLink from 'components/global/NextLink'
import { motion } from 'framer-motion'
import { childVariants, linkVariants } from 'lib/animations'
import { useLastRead, useToggle } from 'lib/hooks'

export default function LastReadButton() {
  const lastRead = useLastRead()
  const [show, toggleShow] = useToggle(false)

  return (
    lastRead && (
      <>
        <motion.div variants={childVariants} className='row-span-full h-full'>
          <motion.button
            variants={linkVariants}
            whileHover='hover'
            whileTap='tap'
            className='biglink w-full text-left flex flex-col items-stretch'
            onClick={() => toggleShow(true)}
          >
            <div className='hidden sm:flex h-full bg-slate-100 rounded-md mb-4'>
              <p className='m-auto text-slate-500'>verse preview</p>
            </div>
            <h1 className='biglink-label'>
              ▶ <span className='biglink-labelSpan ml-2'>Lanjutkan Membaca</span>
            </h1>
            <p className='biglink-description'>
              {lastRead.surahName} ayat {lastRead.verseInSurah}
            </p>
          </motion.button>
        </motion.div>
        <Modal isOpen={show} closeModal={toggleShow}>
          <Modal.Title as='h3' className='font-bold text-2xl'>
            Pilih Tampilan
          </Modal.Title>
          <div className='mt-4 h-full flex flex-col space-y-4'>
            <MotionNextLink
              href={`/read-quran/surah/${lastRead.surahId}#${
                lastRead.surahName + '-' + lastRead.verseInSurah
              }`}
              variants={linkVariants}
              whileHover='hover'
              whileTap='tap'
              className='flex-1 flex items-center justify-center shadow-md text-slate-800 font-medium rounded-md text-lg'
            >
              📖 Buka sebagai surah
            </MotionNextLink>
            <MotionNextLink
              href={`/read-quran/juz/${lastRead.verseInJuz}#${
                lastRead.surahName + '-' + lastRead.verseInSurah
              }`}
              variants={linkVariants}
              whileHover='hover'
              whileTap='tap'
              className='flex-1 flex items-center justify-center shadow-md text-slate-800 font-medium rounded-md text-lg'
            >
              📖 Buka sebagai juz
            </MotionNextLink>
          </div>
        </Modal>
      </>
    )
  )
}
