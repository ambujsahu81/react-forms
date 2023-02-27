import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function App() {
   return (
   <>
      <Head>
        <title>React forms examples</title>
        <meta name="description" content="various examples of react-forms implemented in nextjs" />
      </Head>
      <Layout>
        <h1 className="py-5">React forms examples</h1>
        <ul className="list-disc">
          <li><Link href="forms/basic-form">Basic React-hook-form example</Link></li>
        </ul>
        </Layout>
   </>
  );
};