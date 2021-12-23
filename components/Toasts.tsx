export function MarkLastRead({ surahName, verseInSurah }) {
  return (
    <span className='text-center px-2 text-slate-800'>
      Berhasil Menandakan
      <br />
      <b>
        {surahName} ayat {verseInSurah}
      </b>
      <br />
      ke Terakhir Baca
    </span>
  )
}
