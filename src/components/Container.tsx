import {
  DetailedHTMLProps,
  FC,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
  VFC,
} from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
  style?: any
}

const OuterContainer = forwardRef<HTMLDivElement, Props>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

const InnerContainer = forwardRef<HTMLDivElement, Props>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  }
)

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLDivElement>
  > {
  Outer: any
  Inner: any
}

export const Container = forwardRef<HTMLDivElement, Props>(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}) as CompoundedComponent

Container.Outer = OuterContainer
Container.Inner = InnerContainer
