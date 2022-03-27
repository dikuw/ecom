import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class doc extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}