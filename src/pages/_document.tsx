import strings from '@shared/constants/strings';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap" rel="stylesheet" />

          <meta name="description" content={strings.META_HEAD_DESCRIPTION} />

          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <body id="app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
