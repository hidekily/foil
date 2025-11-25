import { Section } from './Section'
import { allSections } from '../data/sectionData'

interface ProfileSectionListProps {
  className?: string
}

export function ProfileSectionList({}: ProfileSectionListProps) {
  return (
    <>
      {allSections.map((section, index) => (
        <Section 
          key={index}
          titulo={section.titulo}
          items={section.items}
        />
      ))}
    </>
  )
}