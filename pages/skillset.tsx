import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Skillset() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Skillset | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Skillset"
          description="Find all the skills that I have mastered."
        />
      </main>
      <Footer />
    </div>
  );
}
