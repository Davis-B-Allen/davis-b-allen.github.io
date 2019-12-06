import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.scss"
import Img from "gatsby-image"
export default () => {
  const data = useStaticQuery(graphql`
    query query {
      portrait: file(relativePath: { eq: "images/portrait-square-512.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image1: file(relativePath: { eq: "images/resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 64, maxHeight: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/GitHub-Mark-Light-120px-plus.png" }) {
        childImageSharp {
          fluid(maxWidth: 64, maxHeight: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "images/linkedinIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 64, maxHeight: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume: file(relativePath: { eq: "assets/DavisAllen.pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <Layout headerPath="about">
      <SEO title="about"/>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <div className={styles.sidebar}>
            <Img
              className={styles.portrait}
              fluid={data.portrait.childImageSharp.fluid}
              alt="icon"
            />
          <ul className={styles.mainNav}>
              <li className={styles.iconLink}>
                <a href={data.resume.publicURL}>
                  <Img
                    className={styles.icon}
                    fluid={data.image1.childImageSharp.fluid}
                    alt="icon"
                  />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href="https://github.com/Davis-B-Allen">
                  <Img
                    className={styles.icon}
                    fluid={data.image2.childImageSharp.fluid}
                    alt="icon"
                  />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href="https://www.linkedin.com/in/davisallen/">
                  <Img
                    className={styles.icon}
                    fluid={data.image3.childImageSharp.fluid}
                    alt="icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <p>Hi, I'm Davis.</p>

            <p>I'm a software engineer based in New York City, with a background in game design and project management. I love building digital experiences that delight people. Or help people. Or both.</p>

             <p>I bring solid technical chops and good design sensibilities to bear on the task of building engaging, compelling and fun experiences, in code. I can work through the entire product lifecycle, from initial conception and prototyping and implementation, through to delivery and deployment. I love turning deep, complex systems into simple, elegant, intuitive experiences.</p>

            <p>If it puts a smile on someone’s face or makes someone’s life easier, I will enjoy building it.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
