import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SidebarLayout from "../components/sidebarlayout"
import styles from "./contact.module.scss"
export default () => (
  <Layout headerPath="contact">
    <SEO title="contact"/>
    <SidebarLayout>
      <div className={styles.contactWrapper}>
        <p>
          If you'd like to get in touch, please feel free to drop me a line at <a href="mailto:davis@davisallen.com">davis@davisallen.com</a>
        </p>
        <p>
          Otherwise, I'd be happy to connect on <a href="https://www.linkedin.com/in/davisallen/" target="_blank">LinkedIn</a>
        </p>
        <p>
          You can also find me on <a href="https://github.com/Davis-B-Allen" target="_blank">Github</a>
        </p>
        <p>
          Finally, if you're walking around NYC and you happen to bump into me, feel free to say hi.
        </p>
      </div>
    </SidebarLayout>
  </Layout>
)
