interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <>
      <div className={`flex h-[500px] bg-zinc-800 ${className || ''}`}>
        {children}
      </div>
    </>
  )
}