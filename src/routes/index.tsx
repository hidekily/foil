import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <div className="bg-neutral-800 flex flex-col h-[90vh]">

      </div>
    </>
  )
}
