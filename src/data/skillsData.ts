export interface LearningSectionData {
    items: string[]
    state: (
        'Learning' |
        'Learned' |
        'Learned Fundamentals' |
        'Will Learn Soon'
    )[]
}

export const learning: LearningSectionData = {
  items: [
    "Tanstack Router",
    "React",
    "Drizzle ORM",
    "Docker",
    "Zod & Fastify",
    "TypeScript Advanced",
    "better-auth"
  ],
  state: [
    'Learning' ,
    'Learned Fundamentals',
    'Learning',
    'Learning',
    'Learning',
    'Learned Fundamentals'
]
}