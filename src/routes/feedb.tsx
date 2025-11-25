import { Container } from '../components/MainComponentAbout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/feedb')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <Container>

      </Container>
    </>
  )
}
