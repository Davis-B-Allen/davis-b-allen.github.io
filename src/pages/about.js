import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SidebarLayout from "../components/sidebarlayout"
import styles from "./about.module.scss"
export default () => {
  return (
    <Layout headerPath="about">
      <SEO title="about"/>
      <SidebarLayout>
        <p>Hi, I'm Davis.</p>

        <p>I'm a software engineer based in New York City, with a background in game design and project management. I love building digital experiences that delight people. Or help people. Or both.</p>

         <p>I bring solid technical chops and good design sensibilities to bear on the task of building engaging, compelling and fun experiences, in code. I can work through the entire product lifecycle, from initial conception and prototyping and implementation, through to delivery and deployment. I love turning deep, complex systems into simple, elegant, intuitive experiences.</p>

        <p>If it puts a smile on someone’s face or makes someone’s life easier, I will enjoy building it.</p>
      </SidebarLayout>
    </Layout>
  )
}
