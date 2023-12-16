export default function ChallengeForm({ children }: { children: React.ReactNode }) {
  return <label className='flex flex-col gap-1'>{children}</label>
}

interface ChallengeFormTitleProps {
  title: string
}

function Title({ title }: ChallengeFormTitleProps) {
  return <span className='text-sm font-semibold text-[#140A29]'>{title}</span>
}

interface ChallengeFormInputProps extends React.HTMLProps<HTMLInputElement> {
  currentLength: number
  maxLength: number
}

function Input({ currentLength, maxLength, ...props }: ChallengeFormInputProps) {
  return (
    <div className='flex w-full justify-between gap-2 rounded-lg border border-[#140A29] bg-white p-3'>
      <input
        className='flex-1 appearance-none border-none p-0 text-xs text-[#595959] placeholder:text-xs placeholder:text-[#A6A6A6] focus:ring-0'
        {...props}
      />
      <span className='text-[10px] text-[#595959]'>
        {currentLength}/{maxLength}
      </span>
    </div>
  )
}

ChallengeForm.Title = Title
ChallengeForm.Input = Input
