import { MemberLayout } from '../components/memberLayout'
import { membros } from '../data/membros'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/w')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>

      <MemberLayout {...membros.winter} imgPos='right'/>

      <div className="flex h-[500px] bg-zinc-800">

      </div>
    </>
  )
}
