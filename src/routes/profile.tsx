import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { ProfileSectionList } from '../components/ProfileSectionList'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <>
      <PageContainer className="flex-row">
        <ProfileSectionList />
      </PageContainer>

      <hr />

      <PageContainer>

      </PageContainer>

      <hr />

      <PageContainer>

      </PageContainer>

      <hr />

      <PageContainer>

      </PageContainer>
    </>
  )
}
