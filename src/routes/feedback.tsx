import { PageContainer } from '../components/PageContainer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/feedback')({
  component: FeedbackPage,
})

function FeedbackPage() {
  return(
    <>
      <PageContainer>

      </PageContainer>
    </>
  )
}
