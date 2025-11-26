interface SectionItem {
  text: string
  link?: string
}

interface SectionProps {
  titulo: string
  items: (string | SectionItem)[]
}

export function Section({ titulo, items }: SectionProps) {
  
  const renderItem = (item: string | SectionItem, index: number) => {
    if (typeof item === 'string') {
      return (
        <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
          <span className="text-rose-600 mt-1 group-hover:text-lime-400 transition-colors">▸</span>
          <span className="text-base leading-relaxed text-rose-500">{item}</span>
        </li>
      )
    }

    if (item.link) {
      return (
        <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
          <span className="text-rose-600 mt-1 group-hover:text-lime-400 transition-colors">▸</span>
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-base leading-relaxed text-rose-500 hover:text-sky-300 transition-colors"
          >
            {item.text}
          </a>
        </li>
      )
    }

    return (
      <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
        <span className="text-rose-600 mt-1 group-hover:text-lime-400 transition-colors">▸</span>
        <span className="text-base leading-relaxed text-rose-500">{item.text}</span>
      </li>
    )
  }

  return (
    <div className="main-container">
      <div className="w-[90%] h-[85%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-6 m-4
                      flex flex-col items-start justify-start shadow-xl border border-zinc-600 hover:border-sky-500
                      transition-all duration-300 hover:scale-102"
      >
        <div className="w-full flex items-center gap-3 mb-4 pb-3 border-b border-rose-600">
          <h2 className="text-2xl font-bold text-rose-500">{titulo}</h2>
        </div>
        <ul className='w-full space-y-3 flex flex-col items-start justify-start'>
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      </div>
    </div>
  )
}