import BigLink from 'components/global/BigLink'
import { motion } from 'framer-motion'
import { containerVariants } from 'lib/animations'

export default function JuzBigLinks({ firstVerses }) {
  return (
    <motion.div variants={containerVariants} className='read-quran-contents'>
      {firstVerses.map((verse) => (
        <BigLink
          key={verse.meta.juz}
          href={'/read-quran/juz/' + verse.meta.juz}
          label={`Juz ${verse.meta.juz}`}
          description={`▶ Mulai dari ${verse.surah.name.transliteration.id} ayat ${verse.inSurah}`}
        />
      ))}
    </motion.div>
  )
}
