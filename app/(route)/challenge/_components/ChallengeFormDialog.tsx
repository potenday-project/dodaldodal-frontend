'use client'

import { useState } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type SubmitHandler, useForm, Controller } from 'react-hook-form'

import AddIcon from '@/app/_components/icons/AddIcon'
import AlertIcon from '@/app/_components/icons/AlertIcon'
import BlackCloseIcon from '@/app/_components/icons/BlackCloseIcon'
import CheckBoxIcon from '@/app/_components/icons/CheckBoxIcon'
import { useUserContext } from '@/app/_components/providers/UserProvider'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/app/_components/shared/dialog'
import { cn } from '@/app/_styles/utils'

import { share } from '../_utils'
import { useCreateChallengeMutation } from '../queries'

import ChallengeForm from './challenge-form-input'

type Category = '자기계발' | '생활습관' | '공부' | '운동' | '기타'

const CATEGORIES: Category[] = ['자기계발', '생활습관', '공부', '운동', '기타']

const categoryObject = {
  자기계발: 'SELF_DEVELOPMENT',
  생활습관: 'LIFE_STYLES',
  공부: 'STUDY',
  운동: 'WORKOUT',
  기타: 'ETC',
} as const

interface Inputs {
  challengeName: string
  authenticationMethod: string
  reward: string
}

interface ChallengeFormDialogProps {
  isOpenDialog: boolean
  setIsOpenDialog: (isOpen: boolean) => void
}

export default function ChallengeFormDialog({ isOpenDialog, setIsOpenDialog }: ChallengeFormDialogProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | '선택안함'>('선택안함')
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
  })

  const createChallengeMutation = useCreateChallengeMutation()
  const { user } = useUserContext()

  const { handleSubmit, watch, control } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      challengeName: '',
      authenticationMethod: '',
      reward: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = ({ challengeName, authenticationMethod, reward }) => {
    createChallengeMutation.mutate(
      {
        name: challengeName,
        authenticationMethod,
        reward,
        category: categoryObject[selectedCategory as Category],
      },
      {
        onSuccess: ({ data: { challengeId } }) => {
          share.kakao({
            title: `${user.nickname}님이 초대장을 보냈어요!`,
            description: '1:1 목표 매칭 서비스',
            imageUrl: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/dodaldodal_square.png',
            sendUrl: `https://dodaldodal-frontend.vercel.app/invitation/${challengeId}`,
          })
          setIsOpenDialog(false)
        },
      }
    )
  }

  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogTrigger className='absolute bottom-16 right-8'>
        <button>
          <AddIcon />
        </button>
      </DialogTrigger>
      <DialogContent>
        <form
          className='relative flex max-h-[85vh] w-[324px] flex-col gap-7 overflow-y-auto rounded-xl bg-[#D9D9D9] px-6 pb-6 pt-10'
          onSubmit={handleSubmit(onSubmit)}
        >
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
                <Controller
                  control={control}
                  name='challengeName'
                  render={({ field: { onChange, value } }) => (
                    <ChallengeForm.Input
                      currentLength={watch('challengeName')?.length ?? 0}
                      limitLength={12}
                      placeholder='챌린지 이름을 작성해볼까요?'
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value.slice(0, 12))
                      }}
                      maxLength={12}
                    />
                  )}
                />
              </ChallengeForm>

              <div className='flex gap-1'>
                {CATEGORIES.map((category) => {
                  return (
                    <button
                      key={category}
                      type='button'
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
              <div className='flex w-full items-center gap-4'>
                <Controller
                  control={control}
                  name='authenticationMethod'
                  render={({ field: { onChange, value } }) => (
                    <ChallengeForm.Input
                      currentLength={watch('authenticationMethod')?.length ?? 0}
                      limitLength={8}
                      placeholder='어떤 사물을 찍어서 인증할까요?'
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value.slice(0, 8))
                      }}
                      maxLength={8}
                    />
                  )}
                />

                <span className='whitespace-nowrap text-sm font-semibold text-[#140A29]'>찍기</span>
              </div>
            </ChallengeForm>
            <ChallengeForm>
              <ChallengeForm.Title title='보상' />
              <Controller
                control={control}
                name='reward'
                render={({ field: { onChange, value } }) => (
                  <ChallengeForm.Input
                    currentLength={watch('reward')?.length ?? 0}
                    limitLength={15}
                    placeholder='어떤 보상으로 설정할까요?'
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value.slice(0, 15))
                    }}
                    maxLength={15}
                  />
                )}
              />
            </ChallengeForm>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              {isChecked.check1 ? (
                <button
                  type='button'
                  onClick={() => {
                    setIsChecked((prev) => ({ ...prev, check1: !prev.check1 }))
                  }}
                >
                  <CheckBoxIcon />
                </button>
              ) : (
                <button
                  type='button'
                  className='h-4 w-[17px] rounded-full bg-[#A6A6A6] p-1'
                  onClick={() => {
                    setIsChecked((prev) => ({ ...prev, check1: !prev.check1 }))
                  }}
                />
              )}
              <div className='flex flex-col'>
                <span className='text-[10px] text-[#140A29]'>
                  인증 사진을 챌린지 상대가 승인 및 반려할 수 있습니다.
                </span>
                <span className='text-[10px] text-[#140A29]'>24시간 이상 미승인시 자동 승인됩니다.</span>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              {isChecked.check2 ? (
                <button
                  type='button'
                  onClick={() => {
                    setIsChecked((prev) => ({ ...prev, check2: !prev.check2 }))
                  }}
                >
                  <CheckBoxIcon />
                </button>
              ) : (
                <button
                  className='h-4 w-[17px] rounded-full bg-[#A6A6A6] p-1'
                  type='button'
                  onClick={() => {
                    setIsChecked((prev) => ({ ...prev, check2: !prev.check2 }))
                  }}
                />
              )}
              <span className='text-[10px] text-[#140A29]'>인증 사진이 승인된 건에 한해서는 취소가 불가능합니다.</span>
            </div>
          </div>
          <button
            className={cn(
              'mx-auto min-h-[60px] w-[240px] rounded-lg bg-[#482BD9] text-center',
              'disabled:bg-[#A6A6A6]'
            )}
            type='submit'
            disabled={
              watch('challengeName')?.length < 1 ||
              watch('authenticationMethod')?.length < 1 ||
              watch('reward')?.length < 1 ||
              selectedCategory === '선택안함' ||
              !isChecked.check1 ||
              !isChecked.check2
            }
          >
            함께할 친구 초대하기
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
