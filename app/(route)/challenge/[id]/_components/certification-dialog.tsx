import Image from 'next/image'

import { useRef, useState } from 'react'

import { type AxiosResponse } from 'axios'

import AddPhotoIcon from '@/app/_components/icons/AddPhotoIcon'
import BlackCloseIcon from '@/app/_components/icons/BlackCloseIcon'
import CameraIcon from '@/app/_components/icons/CameraIcon'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/app/_components/shared/dialog'
import { type ServerError } from '@/app/_service/core/api.types'

import { useSubmitCertificationMutation } from '../queries'

interface CertificationDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  challengeId: number
}

export default function CertificationDialog({ open, setOpen, challengeId }: CertificationDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const submitCertificationMutation = useSubmitCertificationMutation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <input
              className='hidden'
              ref={inputRef}
              type='file'
              accept='image/jpeg, image/png, image/jpg'
              onChange={(event) => {
                const file = event.target?.files[0]
                setSelectedImage(file)
              }}
            />
            {selectedImage ? (
              <div className='relative mx-auto h-[212px] w-[212px]'>
                <Image className='rounded-lg' src={URL.createObjectURL(selectedImage)} fill alt='' />
              </div>
            ) : (
              <button
                className='mx-auto flex h-[212px] w-[212px] items-center justify-center rounded-lg bg-[#A6A6A6]'
                onClick={() => {
                  inputRef.current?.click()
                }}
              >
                <AddPhotoIcon />
              </button>
            )}
            <div className='flex gap-3'>
              <button
                className='h-11 w-1/2 rounded-lg bg-[#A6A6A6] text-sm font-semibold'
                onClick={() => {
                  inputRef.current?.click()
                }}
              >
                재촬영
              </button>
              <button
                className='h-11 w-1/2 rounded-lg bg-[#482BD9] text-sm font-semibold'
                onClick={() => {
                  submitCertificationMutation.mutate(
                    {
                      image: selectedImage,
                      challengeId: challengeId.toString(),
                    },
                    {
                      onSuccess: () => {
                        setOpen(false)
                      },
                      onError: (error: AxiosResponse<ServerError>) => {
                        alert(error.response.data.message)
                        setOpen(false)
                      },
                    }
                  )
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
