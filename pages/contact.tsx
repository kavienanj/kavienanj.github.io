import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainWrapper from '../components/MainWrapper';

export default function Contact() {
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
}
