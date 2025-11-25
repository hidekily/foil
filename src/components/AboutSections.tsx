interface ContainerProps {
  className?: string
}
// not using interface, but keeping for consistency

import { SectionsData } from "../data/sectionData"

export function Sections({}: ContainerProps) {
  return (
    <>
        <SectionsData />
        <SectionsData />
        <SectionsData />
    </>
  )
}