interface LearningContainerProps {
  children?: React.ReactNode
  className?: string
}

export function LearningContainer({}: LearningContainerProps) {
  return (
    <>
        <div className="h-[90%] w-[90%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg">
            <section className="h-[10%]">
                <h1 className="text-3xl font-bold text-rose-500 p-4 border-b ">
                    Learning Journey ▸ 
                </h1>
            </section>

            <section className="h-[90%] grid grid-cols-3 grid-rows-2 overflow-y-auto justify-items-center items-center">
                <div className="flex flex-row items-center justify-center w-[80%] h-[60%] bg-zinc-800 rounded-lg">
                    <h1>Tanstack</h1>
                    <p>▸</p>
                </div>
            </section>
        </div>
    </>
  )
}