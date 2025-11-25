interface PageContainerProps {
  children?: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <>
      <div className={`flex h-[500px] bg-zinc-800 ${className || ''}`}>
        {children}
      </div>
    </>
  )
}