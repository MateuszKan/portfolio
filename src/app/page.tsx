import Image from "next/image"
import RecentPosts from "@/components/recent-posts"
import Intro from "@/components/intro"
export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

     <RecentPosts />
        {/*  <RecentProjects />

        <NewsletterForm /> */}
      </div>
    </section>

)
};
