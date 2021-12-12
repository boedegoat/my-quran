import Layout from 'components/Layout'
import { useTimeGreeting } from 'hooks'

const testUser = {
  name: 'Bhremada',
}

export default function Home() {
  const greeting = useTimeGreeting()

  return (
    <Layout title='Home'>
      <p className='font-medium text-slate-600 text-lg'>
        👋 {greeting} <span className='text-slate-900 font-bold'>{testUser.name}</span>
      </p>

      <section className='mt-5 shadow-md p-5 rounded-lg'>
        <h1 className='text-xs mb-2'>
          📜 <span className='text-slate-500 font-bold uppercase'>Quote of the day</span>
        </h1>
        <h1 className='text-slate-900 text-2xl font-medium'>
          “Do not lose hope, nor be sad.” - Quran 3:139
        </h1>
      </section>

      <section className='mt-5 shadow-md p-5 rounded-lg'>
        <h1 className='text-2xl mb-2'>
          ▶ <span className='text-slate-900 font-bold'>Continue Read</span>
        </h1>
        <p className='text-slate-500'>QS: Al-Baqarah 30</p>
      </section>

      <div className='grid sm:grid-cols-2 sm:grid-rows-3 gap-5'>
        <section className='mt-5 shadow-md p-5 rounded-lg row-span-full'>
          <h1 className='text-2xl mb-2'>
            📖 <span className='text-slate-900 font-bold'>Read Quran</span>
          </h1>
          <p className='text-slate-500'>Explore 30 juz of al quran</p>
        </section>
        <section className='mt-5 shadow-md p-5 rounded-lg'>
          <h1 className='text-2xl mb-2'>
            ❤ <span className='text-slate-900 font-bold'>Your Favorites</span>
          </h1>
          <p className='text-slate-500'>See your favorite surah and ayat</p>
        </section>
        <section className='mt-5 shadow-md p-5 rounded-lg'>
          <h1 className='text-2xl mb-2'>
            💸 <span className='text-slate-900 font-bold'>Donate</span>
          </h1>
          <p className='text-slate-500'>Donate to others</p>
        </section>
        <section className='mt-5 shadow-md p-5 rounded-lg'>
          <h1 className='text-2xl mb-2'>
            ⚙ <span className='text-slate-900 font-bold'>Settings</span>
          </h1>
          <p className='text-slate-500'>Change font size, theme, and more</p>
        </section>
      </div>
      {/* bookmark */}
    </Layout>
  )
}
