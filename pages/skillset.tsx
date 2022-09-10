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
          description="Frameworks, Databases, Languages, and other tools"
        />
      </main>
      <Footer />
    </MainWrapper>
  );
}
