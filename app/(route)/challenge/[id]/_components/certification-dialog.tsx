import { useRef } from 'react'

import AddPhotoIcon from '@/app/_components/icons/AddPhotoIcon'
import BlackCloseIcon from '@/app/_components/icons/BlackCloseIcon'
import CameraIcon from '@/app/_components/icons/CameraIcon'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/app/_components/shared/dialog'

interface CertificationDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function CertificationDialog({ open, setOpen }: CertificationDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog>
      <DialogTrigger>
        <button>
          <CameraIcon />
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className='relative flex max-h-[85vh] w-[324px] flex-col gap-7 overflow-y-auto rounded-xl bg-[#D9D9D9] px-11 pb-9 pt-11'>
          <DialogClose className='absolute right-2 top-1'>
            <BlackCloseIcon />
          </DialogClose>
          <span className='text-center text-lg font-semibold text-[#140A29]'>인증 사진 업로드</span>
          <div className='flex flex-col justify-center gap-7'>
            <input className='hidden' ref={inputRef} type='file' accept='image/*' />
            <button
              className='mx-auto flex h-[212px] w-[212px] items-center justify-center rounded-lg bg-[#A6A6A6]'
              onClick={() => {
                inputRef.current?.click()
              }}
            >
              <AddPhotoIcon />
            </button>
            <div className='flex gap-3'>
              <button className='h-11 w-1/2 rounded-lg bg-[#A6A6A6] text-sm font-semibold'>재촬영</button>
              <button className='h-11 w-1/2 rounded-lg bg-[#482BD9] text-sm font-semibold'>확인</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
