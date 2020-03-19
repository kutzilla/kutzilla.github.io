/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            github
            mail
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Geschrieben von <strong>{author}</strong>, der in der Nähe von Münster lebt und 
        als IT-Berater arbeitet. Mit ❤️ für Technik 💻 und Umwelt 🌍. Erreichbar auf
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {`, `}
        <a href={`https://instagram.com/${social.instagram}`}>
          Instagram
        </a>
        {` oder `}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
        {`. Aber auch per `}
        <a href={`mailto:${social.mail}`}>
          Mail
        </a>
        {`.`}
      </p>
    </div>
  )
}

export default Bio
