'use client'

import { useState } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import AddIcon from '@/app/_components/icons/AddIcon'
import AlertIcon from '@/app/_components/icons/AlertIcon'
import BlackCloseIcon from '@/app/_components/icons/BlackCloseIcon'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/app/_components/shared/dialog'
import { cn } from '@/app/_styles/utils'

import ChallengeFormInput from './challenge-form-input'
import ChallengeForm from './challenge-form-input'

type Category = '자기계발' | '생활습관' | '공부' | '운동' | '기타' | '선택안함'

const CATEGORIES: Category[] = ['자기계발', '생활습관', '공부', '운동', '기타']

export default function ChallengeFormDialog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('선택안함')

  return (
    <Dialog>
      <DialogTrigger className='absolute bottom-16 right-8'>
        <button>
          <AddIcon />
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className='relative flex max-h-[85vh] w-[324px] flex-col gap-7 overflow-y-auto rounded-xl bg-[#D9D9D9] px-6 pb-6 pt-10'>
          <DialogClose className='absolute right-2 top-1'>
            <BlackCloseIcon />
          </DialogClose>

          <DialogPrimitive.Title className='text-center text-xl font-extrabold text-[#482BD9]'>
            챌린지 추가
          </DialogPrimitive.Title>

          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <ChallengeForm>
                <ChallengeForm.Title title='챌린지 이름' />
                <ChallengeForm.Input currentLength={0} maxLength={12} placeholder='챌린지 이름을 작성해볼까요?' />
              </ChallengeForm>

              <div className='flex gap-1'>
                {CATEGORIES.map((category) => {
                  return (
                    <button
                      key={category}
                      className={cn('h-8 rounded bg-[#A6A6A6] px-2 text-center text-xs font-semibold', {
                        'bg-[#84D5D7]': category === selectedCategory,
                      })}
                      onClick={() => {
                        setSelectedCategory(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
              <div className='flex items-center gap-2'>
                <AlertIcon />
                <span className='text-[10px] text-[#FF4B2B]'>챌린지 이름은 챌린지 생성 이후 변경이 어려워요</span>
              </div>
            </div>
            <ChallengeForm>
              <ChallengeForm.Title title='인증 방식' />
              <ChallengeForm.Input currentLength={0} maxLength={8} placeholder='어떤 사물을 찍어서 인증할까요?' />
            </ChallengeForm>
            <ChallengeForm>
              <ChallengeForm.Title title='보상' />
              <ChallengeForm.Input currentLength={0} maxLength={15} placeholder='어떤 보상으로 설정할까요?' />
            </ChallengeForm>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-[#A6A6A6] p-1' />
              <div className='flex flex-col'>
                <span className='text-[10px] text-[#140A29]'>
                  인증 사진을 챌린지 상대가 승인 및 반려할 수 있습니다.
                </span>
                <span className='text-[10px] text-[#140A29]'>24시간 이상 미승인시 자동 승인됩니다.</span>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-[#A6A6A6] p-1' />
              <span className='text-[10px] text-[#140A29]'>인증 사진이 승인된 건에 한해서는 취소가 불가능합니다.</span>
            </div>
          </div>
          <button
            className={cn(
              'mx-auto min-h-[60px] w-[240px] rounded-lg bg-[#482BD9] text-center',
              'disabled:bg-[#A6A6A6]'
            )}
          >
            함께할 친구 초대하기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
