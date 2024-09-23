import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl'>
            Oops! Looks like you're lost.
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                But don’t worry, even the best explorers take a wrong turn sometimes.
                </h1>
                <p className='mt-1 text-base text-muted-foreground'>
                Why not head back to the homepage and rediscover my work?
                You never know what hidden gems you might find!
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go back home</span>
                </Link>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/projects'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go to projects</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
