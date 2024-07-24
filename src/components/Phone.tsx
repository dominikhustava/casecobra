import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

/* do I need extends HTMLAttributes<HTMLDivElement>
do I need to pass the aditionall props? */ 

interface PhoneProps {
  imgSrc: string
  dark?: boolean
  className?: string
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div className={cn('relative pointer-events-none select-none z-20', className )}{...props}>
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-bg-slate-200-edges.png'
        }
        alt='case frame image with background corners'
      />
      <img
        className='absolute -z-10 inset-0'
        src={imgSrc}
        alt='case filling image'
       />
      
    </div>
  )
}

export default Phone
