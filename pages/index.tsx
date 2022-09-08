import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainWrapper from '../components/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <Head>
        <title>Home | Kavienan J</title>
      </Head>

      <main className="py-20 px-0 flex flex-col justify-center items-center">
        <h1 className="m-0 text-7xl leading-tight text-center">
          Hi, I am <a className="text-dark-blue no-underline focus:underline active:underline hover:underline">Kavienan!</a>
        </h1>

        <p className="mt-2 text-center text-2xl leading-relaxed">
          Self learnt&nbsp;
          <code className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-3 text-lg font-code">Flutter / Next.js</code> Full St(u)ck Developer!
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
    </MainWrapper>
  );
}
