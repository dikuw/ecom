import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class doc extends Document {
  render() {
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}