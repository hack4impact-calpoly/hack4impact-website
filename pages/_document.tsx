import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

class PageDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US" suppressHydrationWarning>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="p-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PageDocument;
