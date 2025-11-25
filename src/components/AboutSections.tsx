interface ContainerProps {
  className?: string
}
// not using interface, but keeping for consistency

export function Sections({}: ContainerProps) {
  return (
    <>
        {/* first div */}
        <div className='main-container'>
            <div className="section-title">
                <h1>Title</h1>
            </div>
            <div className="section-content" >
                <p>content</p>
            </div>
        </div>

        {/* second div */}
        <div className='main-container'>
            <div className="section-title">
                <h1>Title</h1>
            </div>
            <div className="section-content" >
                <p>content</p>
            </div>
        </div>

        {/* third div */}
        <div className='main-container'>
            <div className="section-title">
                <h1>Title</h1>
            </div>
            <div className="section-content" >
                <p>content</p>
            </div>
        </div>
    </>
  )
}