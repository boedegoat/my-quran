import BigLink from 'components/global/BigLink'
import { motion } from 'framer-motion'
import { useRevelation } from 'hooks'
import { containerVariants } from 'lib/animations'

export default function SurahBigLinks({ allSurah }) {
  return (
    <motion.div variants={containerVariants} className='read-quran-contents'>
      {allSurah.map((surah) => (
        <BigLink
          key={surah.id}
          href={'/read-quran/surah/' + surah.id}
          emoji={<SurahNumber number={surah.id} />}
          label={<SurahName name={surah.name} />}
          description={
            <SurahDescription
              name={surah.name}
              revelation={surah.revelation}
              numberOfVerses={surah.numberOfVerses}
            />
          }
        />
      ))}
    </motion.div>
  )
}

function SurahNumber({ number }) {
  return (
    <span className='text-sm bg-slate-800 text-slate-100 w-8 h-7 rounded-md inline-grid place-items-center'>
      {number}
    </span>
  )
}

function SurahName({ name }) {
  return (
    <span className='flex'>
      {name.transliteration.id} <span className='opacity-50 ml-auto'>{name.short}</span>
    </span>
  )
}

function SurahDescription({ name, revelation, numberOfVerses }) {
  const revelationEmoji = useRevelation(revelation.arab)
  return (
    <>
      {revelationEmoji} {name.translation.id} | {numberOfVerses} ayat
    </>
  )
}
