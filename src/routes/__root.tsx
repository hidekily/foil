import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({


  component: () => (
    <>
      <div className="flex-row h-[10vh] bg-zinc-900 justify-items-center">
        <nav className="
              flex flex-row justify-start items-center gap-10
              h-full w-[80%] text-xl font-medium text-sky-600 border-b-4 border-lime-200 navbar"
        >
          <Link to="/" className="home" activeProps={{className:"text-2xl"}}>
            Home
          </Link>

          <Link to="/k" className='ml-12 k' activeProps={{className:"text-2xl"}}>
            karina
          </Link>

          <Link to="/w" className="w" activeProps={{className:"text-2xl"}}>
            winter
          </Link>

          <Link to="/n" className="n" activeProps={{className:"text-2xl"}}>
            ningning
          </Link>

          <Link to="/g" className="g" activeProps={{className:"text-2xl"}}>
            giselle
          </Link>
        </nav>
      </div>

      <hr />

      <div>
        <Outlet />
      </div>
    </>
  ),
})
