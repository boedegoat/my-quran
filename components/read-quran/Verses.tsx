import { motion } from 'framer-motion'
import { childVariants } from 'lib/animations'
import VerseMenu from './VerseMenu'

export default function Verses({ surah }) {
  return (
    <motion.section variants={childVariants} className='space-y-5 mt-5'>
      {surah.preBismillah && (
        <div className='text-center bg-white py-3 rounded-md shadow-sm text-xl sm:text-2xl'>
          {surah.preBismillah.text.arab}
        </div>
      )}

      {surah.verses.map(verse => (
        <div key={verse.id} className='bg-white rounded-md shadow-md'>
          {/* top */}
          <div className='text-sm text-slate-800 px-5 pt-5 flex justify-between items-center'>
            <p>{verse.inSurah}</p>
            <VerseMenu
              surahName={surah.name.transliteration.id}
              verseInSurah={verse.inSurah}
              verseId={verse.id}
            />
          </div>
          {/* body */}
          <div className='p-5 text-right'>
            <p className='mb-5 text-xl sm:text-2xl font-medium'>{verse.text.arab}</p>
            <div className='text-sm sm:text-lg text-slate-500 space-y-4'>
              <p className='text-slate-700 font-medium'>{verse.text.transliteration.en}</p>
              <p>{verse.translation.id}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  )
}
