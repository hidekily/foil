import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { ProfileSectionList } from '../components/ProfileSectionList'
import { LearningContainer } from './../components/Learning';

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

      <PageContainer className='h-[700px] flex items-center justify-center'>
        <LearningContainer>

        </LearningContainer>
      </PageContainer>

      <hr />     
    </>
  )
}
