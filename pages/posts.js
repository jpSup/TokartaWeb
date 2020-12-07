import Head from "next/head"
import { Component } from 'react'
import { attributes, react as PostContent } from '../_posts/my-first-english-blog.md';

export default class Home extends Component {
  render() {
    let { title, language } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <h2>{language}</h2>
          <PostContent />          
        </article>
      </>
    )
  }
}