import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Crazy mtb world"
        info="Forget your daily routine & say yes to adventure"
      >
        <AniLink fade to="/blog" className="btn-white">
          Go to Blog
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "mountain-biking-1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
