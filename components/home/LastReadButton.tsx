import Modal from 'components/global/Modal'
import MotionNextLink from 'components/global/MotionNextLink'
import { motion } from 'framer-motion'
import { childVariants, linkVariants } from 'lib/animations'
import { useLastRead, useToggle } from 'lib/hooks'
import { setLastReadInLocal, updateLastRead } from 'lib/quran'

export default function LastReadButton() {
  const [show, toggleShow] = useToggle(false)
  const { lastRead, setLastRead, showPrompt, setShowPrompt, lastReadInLocal } = useLastRead()

  const onConfirmationClose = () => {
    if (
      confirm(
        'Jika anda close, maka terakhir baca anda di local akan hilang dan digantikan dengan di cloud'
      )
    ) {
      setLastReadInLocal(lastRead)
      setShowPrompt(false)
    }
  }

  const onChooseCloud = () => {
    setLastReadInLocal(lastRead)
    setShowPrompt(false)
  }

  const onChooseLocal = async () => {
    await updateLastRead(lastReadInLocal.verseId)
    setLastRead(lastReadInLocal)
    setShowPrompt(false)
  }

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
        <ChooseModal show={show} toggleShow={toggleShow} lastRead={lastRead} />
        <LastReadConfirmationModal
          show={showPrompt}
          onChooseCloud={onChooseCloud}
          onChooseLocal={onChooseLocal}
          onClose={onConfirmationClose}
          lastRead={lastRead}
          lastReadInLocal={lastReadInLocal}
        />
      </>
    )
  )
}

const ChooseModal = ({ show, toggleShow, lastRead }) => (
  <Modal isOpen={show} closeModal={toggleShow} title='Pilih Tampilan'>
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
)

const LastReadConfirmationModal = ({
  show,
  lastRead,
  lastReadInLocal,
  onClose,
  onChooseCloud,
  onChooseLocal,
}) => (
  <Modal isOpen={show} closeModal={onClose} title='Mau bacaan terakhir yang mana ?'>
    <div className='mt-4 h-full flex flex-col space-y-4'>
      <button className='flex-1 border rounded-lg shadow-sm' onClick={onChooseCloud}>
        <p className='font-bold text-green-500 text-xs uppercase'>cloud</p>
        <p>
          {lastRead?.surahName} ayat {lastRead?.verseInSurah}
        </p>
      </button>
      <button className='flex-1 border rounded-lg shadow-sm' onClick={onChooseLocal}>
        <p className='font-bold text-orange-500 text-xs uppercase'>local</p>
        <p>
          {lastReadInLocal?.surahName} ayat {lastReadInLocal?.verseInSurah}
        </p>
      </button>
    </div>
  </Modal>
)
