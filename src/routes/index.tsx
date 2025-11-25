import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <div className="bg-neutral-800 flex flex-col h-[90vh]">

      </div>
    </>
  )
}
