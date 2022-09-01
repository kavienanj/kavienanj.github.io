import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Contact | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Contact"
          description="Find all the ways to ask me anything anytime!"
        />
      </main>
      <Footer />
    </div>
  );
}
