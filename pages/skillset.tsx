import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainWrapper from '../components/MainWrapper';

export default function Skillset() {
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
}
