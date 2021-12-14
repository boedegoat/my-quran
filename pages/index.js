import BigLink from 'components/BigLink'
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

      <div className='grid mt-5 grid-cols-2 grid-rows-2 gap-5'>
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
