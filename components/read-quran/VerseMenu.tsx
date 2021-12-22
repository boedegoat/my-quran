import {
  DocumentTextIcon,
  DuplicateIcon,
  FolderAddIcon,
  PaperClipIcon,
  ShareIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import Dropdown from 'components/global/Dropdown'

export default function VerseMenu() {
  return (
    <Dropdown
      toggler={
        <span className='block p-1 z-[1] bg-slate-300/60 rounded-md text-slate-400 hover:bg-slate-300'>
          <DotsVerticalIcon className='w-4 h-4' />
        </span>
      }
    >
      <Dropdown.Group>
        <Dropdown.Item type='button' Icon={PaperClipIcon}>
          Tandai Terakhir Baca
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
        <Dropdown.Item type='button' Icon={FolderAddIcon}>
          Simpan ke Bookmark
        </Dropdown.Item>
      </Dropdown.Group>
    </Dropdown>
  )
}
