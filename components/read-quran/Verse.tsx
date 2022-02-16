import VerseMenu from './VerseMenu'

export default function Verse({ verse, surah }) {
  return (
    <div key={verse.id} id={verse.inSurah} className='bg-white rounded-md shadow-md scroll-mt-24'>
      {/* top */}
      <div className='text-sm text-slate-800 px-5 pt-5 flex justify-between items-center'>
        <p>{verse.inSurah}</p>
        <VerseMenu
          surahName={surah.name.transliteration.id}
          verseInSurah={verse.inSurah}
          surahId={surah.id}
          verseId={verse.id}
        />
      </div>
      {/* body */}
      <div className='p-5 text-right'>
        <p className='mb-5 text-3xl sm:text-4xl font-medium font-arab'>{verse.text.arab}</p>
        <div className='text-sm sm:text-lg text-slate-500 space-y-4'>
          <p className='text-slate-700 font-medium'>{verse.text.transliteration.en}</p>
          <p>{verse.translation.id}</p>
        </div>
      </div>
    </div>
  )
}
