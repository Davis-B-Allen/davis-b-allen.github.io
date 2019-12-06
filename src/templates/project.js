import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from "./project.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout headerPath={post.frontmatter.routename}>
      <SEO title={post.frontmatter.title}/>
      <div className={styles.projectWrapper}>
        <div className={styles.markdownWrapper}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        routename
      }
    }
  }
`
