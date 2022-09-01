import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Projects | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Projects"
          description="Find all the projects that I have created and contributed."
        />
      </main>
      <Footer />
    </div>
  );
}
