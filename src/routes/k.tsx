import { MemberLayout } from '../components/memberLayout'
import { membros } from '../data/membros'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/k')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <MemberLayout {...membros.karina} imgPos='left'/>  

      <div className="flex h-[500px] bg-zinc-800">

      </div>  
    </>
  )
}
