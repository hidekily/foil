export interface SectionItem {
  text: string
  link?: string
}

export interface SectionData {
  titulo: string
  items: (string | SectionItem)[]
}

export const skills: SectionData = {
  titulo: "Top Skills",
  items: [
    "React & TypeScript",
    "Tanstack Query & Router",
    "Drizzle ORM & SQLite",
    "Tailwind CSS",
    "fastify",
    "Zod"
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
    {
      text: "GITHUB: github.com/hidekily",
      link: "https://github.com/hidekily"
    },
    {
      text: "EMAIL: murilotaue1@gmail.com",
      link: "mailto:murilotaue1@gmail.com"
    },
    {
      text: "LINKEDIN: linkedin.com/in/murilo-taue/",
      link: "https://linkedin.com/in/murilo-taue/"
    }
  ]
}

export const allSections: SectionData[] = [skills, languages, contact]