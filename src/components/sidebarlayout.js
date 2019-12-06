import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./sidebarlayout.module.scss"
import Img from "gatsby-image"
export default ({ children }) => {
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
                <a href={data.resume.publicURL} target="_blank">
                  <Img
                    className={styles.icon}
                    fluid={data.image1.childImageSharp.fluid}
                    alt="icon"
                  />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href="https://github.com/Davis-B-Allen" target="_blank">
                  <Img
                    className={styles.icon}
                    fluid={data.image2.childImageSharp.fluid}
                    alt="icon"
                  />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href="https://www.linkedin.com/in/davisallen/" target="_blank">
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
          {children}
          </div>
        </div>
      </div>
  )
}
