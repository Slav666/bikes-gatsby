import React from "react"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import styled from "../css/blog.module.css"
// import StyledHero from "../components/StyledHero"
import { Link, useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              title
              date
              image
            }
            fields {
              slug
            }
          }
        }
      }
      defaultBcg: file(relativePath: { eq: "blog-bike-2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <div className={styled.blo}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div className={styled.blog}>
              <Link
                className={styled.link}
                to={`blog/${edge.node.fields.slug}`}
              >
                <div>
                  <li className={styled.list}>
                    <div className={styled.singleBlog}>
                      <img
                        className={styled.image}
                        src={edge.node.frontmatter.image}
                        alt="som"
                      />
                      <div className={styled.title}>
                        {edge.node.frontmatter.title}
                      </div>
                      <div className={styled.date}>
                        {edge.node.frontmatter.date}
                      </div>
                    </div>
                  </li>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
