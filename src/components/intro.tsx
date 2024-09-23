import Image from 'next/image'
import authorImage from '/public/images/authors/mateusz.jpg'
import ProfileButtons from './profile-buttons'

export default function Intro() {
  return (
    <section className='pb-24'>
      <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title no-underline'>Hey 👋 I&#39;m Mateusz</h1>
          <p className='mt-3 font-light text-muted-foreground'>
            I&#39;m a software engineer based in London, United Kingdom. I&#39;m
            passionate about learning new technologies and sharing knowledge with
            others.
          </p>
        </div>
        <div className='relative'>
          <Image
            className='flex-1 rounded-lg'
            src={authorImage}
            alt='Mateusz Kantarewicz'
            width={175}
            height={175}
            priority
          />
        </div>
      </div>
      <ProfileButtons linkedInUrl="https://www.linkedin.com/in/mateuszkan" cvUrl="https://www.linkedin.com/in/mateuszkan" />
    </section>
  )
}
