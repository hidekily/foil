interface SectionProps {
  titulo: string
  items: string[]
  className?: string
  icon?: string // Adicionar ícone opcional
}

export function Section({ titulo, items}: SectionProps) {
  return (
    <div className="main-container">
      <div className="w-[90%] h-[85%] bg-gradient-to-br from-gray-700 to-gray-900
                      rounded-lg p-6 m-4 flex flex-col items-start justify-start shadow-xl border border-zinc-600
                      hover:border-sky-500 transition-all duration-300 hover:scale-102"
      >
        
        {/* Header com ícone */}
        <div className="w-full flex items-center gap-3 mb-4 pb-3 border-b border-zinc-600">
          <h2 className="text-2xl font-bold text-sky-400">{titulo}</h2>
        </div>

        {/* Lista de items */}
        <ul className='w-full space-y-3 flex flex-col items-start justify-start text-sky-200'>
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200"
            >
              {/* if item equals to "x" "y" or "z" show specific div and href */}
              <span className="text-sky-600 mt-1 group-hover:text-lime-400 transition-colors">▸</span>
              {titulo === "contact" ? 
                (item === "GITHUB: github.com/hidekily" ? 
                    <a href="https://github.com/hidekily" className="underline text-base leading-relaxed text-sky-500">
                      {item}
                    </a>  
                  : item === "EMAIL: murilotaue1@gmail.com" 
                  ? 
                    <a href="mailto:murilotaue1@gmail.com" className="underline text-base leading-relaxed text-sky-500">
                      {item}
                    </a>
                  : 
                    <a href="https://linkedin.com/in/murilo-taue/" className="underline text-base leading-relaxed text-sky-500">
                      {item}
                    </a>
                )
                : <span className="text-base leading-relaxed text-sky-500">{item}</span>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}