import HomeComponent from '@@/Home';
import strings from '@shared/constants/strings';
import pageTitle from '@shared/utilities/pageTitle';
import Head from 'next/head';

const title = pageTitle(strings.HEAD_TITLE);

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>

      <HomeComponent />
    </>
  );
}
