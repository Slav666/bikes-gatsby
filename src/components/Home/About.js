import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/about.module.css"
import Title from "../Title"

const About = () => {
  const data = useStaticQuery(graphql`
    query homePage {
      markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
        frontmatter {
          title
          mainpitch {
            description
            title
            img
          }
        }
      }
    }
  `)

  return (
    <div>
      <div className={styles.heading}>
        <Title title="Why you should love" subtitle="mtb cycling?" />
      </div>
      {data.markdownRemark.frontmatter.mainpitch.map(pitch => {
        return (
          <div key={pitch.title}>
            <section className={styles.about}>
              <div className={styles.aboutCenter}>
                <article article className={styles.aboutImg}>
                  <div className={styles.imgContainer}>
                    <img src={pitch.img} alt="pictures" />
                  </div>
                </article>

                <article className={styles.aboutInfo}>
                  <h4>{pitch.title}</h4>
                  <p>{pitch.description}</p>
                </article>
              </div>
            </section>
          </div>
        )
      })}
    </div>
  )
}
export default About
