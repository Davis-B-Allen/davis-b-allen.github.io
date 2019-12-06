import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import styles from "./index.module.scss"
import Img from "gatsby-image"
export default ({ data }) => {
  console.log(data)

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <Layout headerPath="work">
      <SEO title="work"/>
      <div>

        <section className={styles.hero}>
          <h1>My Work</h1>
          <article>
            <p>I've worked across a number of roles in digital product development: as a software engineer, as a game designer and producer. Here's a sample of the projects, both professional and personal, that I've contributed to.</p>
          </article>
        </section>

        <section className={styles.projects}>
          <ul>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            // <div key={node.id}>
            <li key={node.id} onClick={() => window.location.href = node.fields.slug}>
              <figure>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                <figcaption>
                  <h3>
                    {node.frontmatter.title}
                  </h3>
                </figcaption>
              </figure>
              <p>
                {node.excerpt}
              </p>
              <p><strong>Details<span className={styles.detailsArrow}>→</span></strong></p>
            </li>
          // </div>
          ))}

          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___rank], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rank
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
