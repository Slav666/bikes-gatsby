import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "../css/blogTempate.module.css"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image
      }
      html
    }
    defaultBcg: file(relativePath: { eq: "blog-bike-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const blogTemplate = props => {
  return (
    <Layout>
      <StyledHero img={props.data.defaultBcg.childImageSharp.fluid} />
      <div className={styled.container}>
        <div className={styled.title}>
          {props.data.markdownRemark.frontmatter.title}
        </div>

        <img
          className={styled.image}
          src={props.data.markdownRemark.frontmatter.image}
          alt=""
        />
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default blogTemplate
