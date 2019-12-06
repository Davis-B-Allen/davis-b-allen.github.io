import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.scss"
import Img from "gatsby-image"
export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/portrait-square-512.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout headerPath="~">
      <SEO title="davisallen"/>
      <div className={styles.indexContainer}>
        <div className={styles.heroWrapper}>
          <section className={styles.hero}>
            <div className={styles.portraitWrapper}>
              <Img
                className={styles.portrait}
                fluid={data.file.childImageSharp.fluid}
                alt="icon"
              />
            </div>
            <article className={styles.introText}>
              <p>
                Hi, I'm Davis. <span>I'm a software engineer and game designer.</span>
              </p>
              <p>
                Here you can learn a bit more <Link className={styles.aboutLink} to="/about">about me</Link>, check out <Link className={styles.workLink} to="/work">my work</Link>, or get <Link className={styles.contactLink} to="/contact">in touch</Link> with me.
              </p>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  )
  }
