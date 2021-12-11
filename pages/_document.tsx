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
      <Html lang="en-US">
        <Head />
        <body className="p-0 bg-coolGray-lightest">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PageDocument;
