interface MemberLayoutProps {
  nome: string
  idade: number
  imgPos?: 'left' | 'right'
  imgclass: string
}

export function MemberLayout({
  nome,
  idade,
  imgclass,
  imgPos = 'left'
}: MemberLayoutProps) {
  return (
    <>
      <div className="bg-zinc-800 h-[90vh]">
        <div className={`flex h-[500px] ${imgPos === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-[50%] h-[100%] flex justify-center items-center">
            <a className={`text-sky-300 text-4xl ${imgclass}`}></a>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-sky-300">{nome}</h1>
            <h2 className="text-2xl text-sky-400">{idade}</h2>
          </div>
        </div>
      </div>
      <div className="flex h-[500px] bg-zinc-800"></div>
    </>
  )
}