import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>About | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Who am I?"
          description="Find all the details you need to know about me."
        />
      </main>
      <Footer />
    </div>
  );
}
