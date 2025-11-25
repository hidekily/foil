interface SectionProps {
  titulo: string
  items: string[]
  className?: string
}

export function Section({ titulo, items}: SectionProps) {
  return (
    <div className={"main-container"}>
      <div className="w-[80%] h-[80%] bg-zinc-700 rounded-md p-5 m-5 flex flex-col items-start justify-start text-center">
        <div className="section-title">
          <h1 className="mt-4">{titulo}</h1>
        </div>
        <div className="section-content">
          <ul className='list-disc list-inside space-y-3 flex flex-col items-start justify-start'>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}