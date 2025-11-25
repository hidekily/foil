import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({


  component: () => (
    <>

    {/* div section for header part of our application */}
      <div className="flex-row h-[10vh] bg-zinc-900 justify-items-center">
        <nav className="
              flex flex-row justify-start items-center gap-10
              h-full w-[80%] text-xl font-medium text-sky-600 border-b-4 border-lime-200 navbar"
        >
          <Link to="/" className="home" activeProps={{className:"text-2xl"}}> Home </Link>

          <Link to="/profile" className='ml-12 k-profile' activeProps={{className:"text-2xl"}}> profile </Link>

          <Link to="/feedback" className="k-feedback" activeProps={{className:"text-2xl"}}> feedback </Link>
        </nav>
      </div>

      {/* rest of our content uploading content from routes */}
      <div>
        <Outlet />
      </div>
    </>
  ),
})
