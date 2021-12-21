import { DotsVerticalIcon } from '@heroicons/react/solid'
import Layout from 'components/Layout'
import { fetchMyApi } from 'lib/utils'

export default function Surah({ surah }) {
  console.log(surah)

  const originEmoji = surah.revelation.arab === 'مكة' ? '🕋' : '🕌'

  return (
    <Layout title='surah'>
      {/* details */}
      <header className='space-y-4'>
        <div className='font-bold text-center'>
          <h1 className='text-slate-900 text-3xl'>{surah.name.long}</h1>
          <h2 className='text-slate-800/50 text-xl mt-2'>
            {surah.id}. {surah.name.transliteration.id}
          </h2>
        </div>
        <div className='bg-slate-200 p-2 rounded-md text-slate-700 font-medium flex items-center justify-between text-sm sm:text-base space-x-2 shadow-sm'>
          <p className='bg-slate-100 px-2 py-1 rounded-md'>
            {originEmoji} {surah.revelation.id}
          </p>
          <p className='bg-slate-100 px-2 py-1 rounded-md flex-grow text-center'>
            {surah.name.translation.id}
          </p>
          <p className='bg-slate-100 px-2 py-1 rounded-md'>{surah.numberOfVerses} ayat</p>
        </div>
      </header>

      {/* verses */}
      <section className='space-y-5 mt-5'>
        {surah.verses.map((verse) => (
          <div key={verse.id} className='bg-white rounded-md shadow-md overflow-hidden'>
            <div className='text-sm text-slate-800 px-5 pt-5 flex justify-between items-center'>
              <p>{verse.inSurah}</p>
              <button className='p-1 bg-slate-300/60 rounded-md text-slate-400 hover:bg-slate-300'>
                <DotsVerticalIcon className='w-4 h-4' />
              </button>
            </div>
            <div className='p-5 text-right'>
              <p className='mb-5 text-xl sm:text-2xl font-medium'>{verse.text.arab}</p>
              <div className='text-sm sm:text-lg text-slate-500 space-y-4'>
                <p className='text-slate-700 font-medium'>
                  {verse.text.transliteration.en}
                </p>
                <p>{verse.translation.id}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const surahIds = await fetchMyApi('/surah?select=id')
  const paths = surahIds.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id: surahId } = params

  const surah = await fetchMyApi(`/surah/${surahId}`)

  return {
    props: { surah },
  }
}
