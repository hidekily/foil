import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/MainComponentAbout'


export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Container>

      </Container>
    </>
  )
}
