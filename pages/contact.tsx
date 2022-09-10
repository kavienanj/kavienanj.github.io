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
          description="Social profiles, Email, Number and other links"
        />
      </main>
      <Footer />
    </MainWrapper>
  );
}
