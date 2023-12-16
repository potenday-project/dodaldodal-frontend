import React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode
    props?: React.ForwardRefExoticComponent<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>>
  }
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className='DialogOverlay' />
    <DialogPrimitive.Content className='DialogContent' {...props} ref={forwardedRef}>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))

DialogContent.displayName = 'Dialog'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
