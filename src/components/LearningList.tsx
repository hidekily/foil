import { LearningCard } from './LearningCards'
import { learning } from '../data/skillsData'

interface LearningListProps {
  className?: string
}

export function LearningList({ className }: LearningListProps) {
  return (
    <section className={`
      h-[90%] 
      grid grid-cols-2
      overflow-y-auto 
      justify-items-center items-center
      ${className || ''}
    `}>
      {learning.items.map((item, index) => (
        <LearningCard 
            key={index}
            title={item}
            state={learning.state[index]}
        />
      ))}
    </section>
  )
}