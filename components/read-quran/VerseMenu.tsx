import {
  DocumentTextIcon,
  DuplicateIcon,
  FolderAddIcon,
  PaperClipIcon,
  ShareIcon,
  SpeakerphoneIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import Dropdown from 'components/global/Dropdown'
import { MarkLastRead } from 'components/Toasts'
import { updateLastRead } from 'lib/quran'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

export default function VerseMenu({ surahName, verseInSurah, verseId }) {
  const { status } = useSession()

  return (
    <Dropdown
      toggler={
        <span className='block p-1 z-[1] bg-slate-300/60 rounded-md text-slate-400 hover:bg-slate-300'>
          <DotsVerticalIcon className='w-4 h-4' />
        </span>
      }
    >
      <Dropdown.Group>
        <p className='text-center font-medium text-[17px] py-1'>
          {surahName} ayat {verseInSurah}
        </p>
      </Dropdown.Group>
      <Dropdown.Group>
        <Dropdown.Item
          type='button'
          Icon={PaperClipIcon}
          onClick={async () => {
            const lastReadKey = 'lastReadId' // key name in local storage

            // if user has not signed in
            if (status === 'unauthenticated') {
              localStorage.setItem(lastReadKey, verseId)
              toast.success(<MarkLastRead {...{ surahName, verseInSurah }} />)
              return
            }

            // if user has signed in
            localStorage.setItem(lastReadKey, verseId)
            await toast.promise(updateLastRead(verseId), {
              loading: 'Tunggu bos...',
              success: <MarkLastRead {...{ surahName, verseInSurah }} />,
              error: 'Ada yang error ni bos',
            })
          }}
        >
          Tandai Terakhir Baca
        </Dropdown.Item>
        <Dropdown.Item type='button' Icon={FolderAddIcon}>
          Simpan ke Bookmark
        </Dropdown.Item>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.Item type='button' Icon={DocumentTextIcon}>
          Liat Tafsir
        </Dropdown.Item>
        <Dropdown.Item type='button' Icon={VolumeUpIcon}>
          Play Audio
        </Dropdown.Item>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.Item type='button' Icon={DuplicateIcon}>
          Copy Ayat
        </Dropdown.Item>
        <Dropdown.Item type='button' Icon={ShareIcon}>
          Share Ayat
        </Dropdown.Item>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.Item type='button' Icon={SpeakerphoneIcon} danger>
          Lapor Kesalahan
        </Dropdown.Item>
      </Dropdown.Group>
    </Dropdown>
  )
}
