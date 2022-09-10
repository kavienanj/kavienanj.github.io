import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainWrapper from '../components/MainWrapper';

export default function About() {
  return (
    <MainWrapper>
      <Head>
        <title>About | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Who am I?"
          description="Education, Achievements, Experience and Interest"
        />
      </main>
      <Footer />
    </MainWrapper>
  );
}
