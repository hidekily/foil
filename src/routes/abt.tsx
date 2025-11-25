import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/MainComponentAbout'
import { Sections } from '../components/AboutSections'

export const Route = createFileRoute('/abt')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Container className="flex-row">
        <Sections />
      </Container>
    </>
  )
}
