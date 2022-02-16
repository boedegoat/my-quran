import BigLink from 'components/global/BigLink'
import Greeting from 'components/global/Greeting'
import Layout from 'components/global/layout'
import LastReadButton from 'components/home/LastReadButton'
import { motion } from 'framer-motion'
import { childVariants, containerVariants } from 'lib/animations'

export default function Home() {
  return (
    <Layout title='Home' variants={containerVariants}>
      <Greeting />
      <motion.section variants={childVariants} className='mt-5 shadow-md p-5 rounded-lg bg-white'>
        <h1 className='text-xs mb-2'>
          📜 <span className='text-slate-500 font-bold uppercase'>Quote of the day</span>
        </h1>
        <h1 className='text-slate-900 text-2xl font-medium'>
          “Do not lose hope, nor be sad.” - Quran 3:139
        </h1>
      </motion.section>
      <div className='grid mt-5 sm:grid-cols-2 sm:grid-rows-2 gap-5'>
        <LastReadButton />
        <motion.div variants={childVariants}>
          <BigLink
            href='/read-quran'
            emoji='📖'
            label='Baca Quran'
            description='Explore 30 juz of al quran'
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <BigLink
            href='/bookmark/favorites'
            emoji='❤'
            label='Favorit Anda'
            description='See your favorite surah and ayat'
          />
        </motion.div>
      </div>
    </Layout>
  )
}
