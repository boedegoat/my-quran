import { motion } from 'framer-motion'
import { childVariants } from 'lib/animations'
import { useRevelation } from 'lib/hooks'

export default function SurahDetails({ surah }) {
  const revelationEmoji = useRevelation(surah.revelation.arab)

  return (
    <motion.header variants={childVariants} className='space-y-4'>
      <div className='font-bold text-center'>
        <h1 className='text-slate-900 text-4xl font-arab font-bold'>{surah.name.long}</h1>
        <h2 className='text-slate-800/50 text-xl mt-2'>
          {surah.id}. {surah.name.transliteration.id}
        </h2>
      </div>
      <div className='bg-slate-200 p-2 rounded-md text-slate-700 font-medium flex items-center justify-between text-sm sm:text-base space-x-2 shadow-sm'>
        <p className='bg-slate-100 px-2 py-1 rounded-md'>
          {revelationEmoji} {surah.revelation.id}
        </p>
        <p className='bg-slate-100 px-2 py-1 rounded-md flex-grow text-center'>
          {surah.name.translation.id}
        </p>
        <p className='bg-slate-100 px-2 py-1 rounded-md'>{surah.numberOfVerses} ayat</p>
      </div>
    </motion.header>
  )
}
