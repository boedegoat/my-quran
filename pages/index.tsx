import BigLink from 'components/global/BigLink'
import Greeting from 'components/global/Greeting'
import Layout from 'components/global/layout'
import { motion } from 'framer-motion'
import { childVariants } from 'lib/animations'

export default function Home() {
  return (
    <Layout title='Home'>
      <Greeting />
      <motion.section
        variants={childVariants}
        className='mt-5 shadow-md p-5 rounded-lg bg-white'
      >
        <h1 className='text-xs mb-2'>
          📜 <span className='text-slate-500 font-bold uppercase'>Quote of the day</span>
        </h1>
        <h1 className='text-slate-900 text-2xl font-medium'>
          “Do not lose hope, nor be sad.” - Quran 3:139
        </h1>
      </motion.section>
      <div className='grid mt-5 sm:grid-cols-2 sm:grid-rows-2 gap-5'>
        <BigLink
          className='row-span-full'
          href='/read-quran'
          emoji='▶'
          label='Continue Read'
          description='QS: Al-Baqarah 30'
        />
        <BigLink
          href='/read-quran'
          emoji='📖'
          label='Read Quran'
          description='Explore 30 juz of al quran'
        />
        <BigLink
          href='/bookmark/favorites'
          emoji='❤'
          label='Your Favorites'
          description='See your favorite surah and ayat'
        />
      </div>
    </Layout>
  )
}
