import { LearningList } from './LearningList'

interface LearningContainerProps {
  children?: React.ReactNode
  className?: string
}

export function LearningContainer({ className }: LearningContainerProps) {
  return (
    <div className={`
      h-[90%] w-[90%] 
      bg-gradient-to-br from-gray-700 to-gray-900 
      rounded-lg
      ${className || ''}
    `}>
      <section className="h-[10%]">
        <h1 className="text-3xl font-bold text-rose-500 p-4 border-b border-rose-600">
          What I'm Learning
        </h1>
      </section>

      <LearningList />
    </div>
  )
}