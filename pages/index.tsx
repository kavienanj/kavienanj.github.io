import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Home | Kavienan J</title>
      </Head>

      <main className="py-20 px-0 flex flex-col justify-center items-center">
        <h1 className="m-0 text-[4rem] leading-tight text-center">
          Hi, I am <Link href="https://nextjs.org">
            <a className="text-[#0070f3] no-underline focus:underline active:underline hover:underline">Kavienan!</a>
          </Link>
        </h1>

        <p className="mt-2 text-center text-2xl leading-normal">
          Self learnt&nbsp;
          <code className="bg-[#fafafa] rounded-md p-3 text-lg font-code">Flutter / Next.js</code> Full St(u)ck developer!
        </p>
 
        <div className="mt-12 w-full flex-col sm:max-w-[800px] sm:flex-row flex flex-wrap justify-center">
          <Card
            next="/about"
            title="Who am I?"
            description="Find all the details you need to know about me."
          />
          <Card
            next="/projects"
            title="Projects"
            description="Find all the projects that I have created and contributed."
          />
          <Card
            next="/skillset"
            title="Skillset"
            description="Find all the skills that I have mastered."
          />
          <Card
            next="/contact"
            title="Contact"
            description="Find all the ways to ask me anything anytime!"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
