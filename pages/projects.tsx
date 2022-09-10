import Head from 'next/head';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainWrapper from '../components/MainWrapper';

export default function Projects() {
  return (
    <MainWrapper>
      <Head>
        <title>Projects | Kavienan J</title>
      </Head>
      <main>
        <Card
          next="/"
          title="Projects"
          description="Websites, Mobile/Desktop Apps, Open source, etc."
        />
      </main>
      <Footer />
    </MainWrapper>
  );
}
