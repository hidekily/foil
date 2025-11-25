interface SectionDataProps {
  className?: string
}
// not using interface, but keeping for consistency

export function SectionsData({}: SectionDataProps) {
  return (
    <>
        {/* first div */}
        <div className='main-container'>
            <div className="section-title">
                <h1 className="mt-12">Title</h1>
            </div>
            <div className="section-content">
                <ul className='list-disc'>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
    </>
  )
}