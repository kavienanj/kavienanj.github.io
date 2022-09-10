import Head from 'next/head';
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
        <h1 className="m-0 text-7xl leading-tight text-center font-medium">
          Hi, I am <a className="text-dark-blue no-underline focus:underline active:underline hover:underline">Kavienan!</a>
        </h1>

        <p className="mt-2 text-center text-2xl leading-relaxed">
          Self Learnt&nbsp;
          <code className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-3 text-lg font-code">Flutter / Next.js</code> Full St(u)ck Developer
        </p>
 
        <div className="mt-12 w-full flex-col sm:max-w-[800px] sm:flex-row flex flex-wrap justify-center">
          <Card
            next="/about"
            title="Who am I?"
            description="Education, Achievements, Experience and Interest"
          />
          <Card
            next="/projects"
            title="Projects"
            description="Websites, Mobile/Desktop Apps, Open source, etc."
          />
          <Card
            next="/skillset"
            title="Skillset"
            description="Frameworks, Databases, Languages, and other tools"
          />
          <Card
            next="/contact"
            title="Contact"
            description="Social profiles, Email, Number and other links"
          />
        </div>
      </main>

      <Footer />
    </MainWrapper>
  );
}
