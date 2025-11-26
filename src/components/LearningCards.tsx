interface LearningCardProps {
  title: string
  className?: string
  state?: 'learning' | 'learned'
}

export function LearningCard({ title, className, state }: LearningCardProps) {
  return (
    <div className={`
      flex items-center justify-between
      w-[80%] h-[60%] p-4
      bg-zinc-800 rounded-lg
      border border-zinc-600 hover:border-rose-500
      transition-all duration-300 hover:scale-105
      ${className || ''}
    `}>
      <h3 className="text-lg font-bold text-rose-500">{title}</h3>
      <span className="text-rose-400 text-md">{state}</span>
    </div>
  )
}