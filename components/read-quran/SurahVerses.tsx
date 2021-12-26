import { motion } from 'framer-motion'
import { childVariants } from 'lib/animations'
import Verse from './Verse'

export default function Verses({ surah }) {
  return (
    <motion.section variants={childVariants} className='space-y-5 mt-5'>
      {surah.preBismillah && (
        <div className='text-center bg-white py-3 rounded-md shadow-sm text-xl sm:text-2xl'>
          {surah.preBismillah.text.arab}
        </div>
      )}

      {surah.verses.map((verse) => (
        <Verse key={verse.id} verse={verse} surah={surah} />
      ))}
    </motion.section>
  )
}
