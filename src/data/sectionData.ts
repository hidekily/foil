export interface SectionData {
  titulo: string
  items: string[]
}

export const skills: SectionData = {
  titulo: "Top Skills",
  items: [
    "React & TypeScript",
    "Tanstack Query & Router",
    "Drizzle ORM & SQLite",
    "Tailwind CSS",
    "fastify"
   
  ]
}

export const languages: SectionData = {
  titulo: "Languages",
  items: [
    "Portuguese (Native)",
    "English (Professional)"
  ]
}

export const contact: SectionData = {
  titulo: "contact",
  items: [
    "GITHUB: github.com/hidekily",
    "EMAIL: murilotaue1@gmail.com",
    "LINKEDIN: linkedin.com/in/murilo-taue/"
  ]
}

// Array com todas as sections (para usar com .map)
export const allSections: SectionData[] = [
  skills,
  languages,
  contact
]