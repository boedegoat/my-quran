import { motion } from 'framer-motion'
import { childVariants } from 'lib/animations'
import { Fragment } from 'react'
import SurahDetails from './SurahDetails'
import Verse from './Verse'

export default function JuzVerses({ juz }) {
  let currentSurah
  return (
    <motion.section variants={childVariants} className='space-y-5 mt-5'>
      {juz.map((verse) => {
        const Render = (
          <Fragment key={verse.id}>
            {currentSurah !== verse.surah.name.short && (
              <SurahDetails surah={verse.surah} />
            )}
            <Verse verse={verse} surah={verse.surah} />
          </Fragment>
        )
        currentSurah = verse.surah.name.short
        return Render
      })}
    </motion.section>
  )
}
