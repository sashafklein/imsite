import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import RightArrow from "@images/icons/right-arrow.svg"

import Carousel from "@components/carousel"
import { getAssets } from "@utils/getAssets"
import SEO from "@components/seo"
import Button from "@components/button"
import LinkFooter from "@components/link-footer"

import "./home.scss"

const IndexPage = () => {
  const { site, allFile } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
      allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const assets = getAssets(allFile)

  const { title, description } = site.siteMetadata

  return (
    <div className="home page">
      <SEO title="Home" />
      <div className="bg--royal-blue">
        <div className="container--small">
          <div className="row">
            <div className="col-4">
              <img
                alt="Doctor with logo"
                src={assets.heroIll}
                width={320}
                className="mt20 ml40--resp"
              />
            </div>
            <div className="flex-col col-8 color--white center-text--resp row">
              <h1>{description}</h1>
              <h5>
                We're building a solution to help us all get back to normal in
                the wake of Covid-19 that serves public health and respects
                personal privacy.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <img
        src={assets.heroWave}
        className="bg--transparent full-width pt40--resp"
        style={{ marginTop: "-15vw" }}
      />

      <div className="bg--white">
        <div className="container--large">
          <div className="row color--dark-purple mv60 flex-jc--c mb30--resp">
            <h4>
              We're looking for partners in healthcare, government, tech, and
              more.
            </h4>
            <Button
              to="/contact-us"
              type="dark-purple,large"
              className="mh50 mh0--resp mv50--resp"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      <div className="bg--gradient--off-white-white">
        <div className="container--small pt80">
          <div className="row">
            <div className="col-6 relative mb40--resp">
              <img
                src={assets.metricIll}
                className="ml10 ml0--resp w365 w250--resp"
                style={{ zIndex: 1 }}
              />
              <div className="radial-blur-circle radial-blur-circle--right" />
            </div>
            <div className="col-6 flex flex-col center-text--resp">
              <h2 className="color--dark-purple pr100 pr0--resp">
                A metric of health available to all
              </h2>
              <p className="mr20 mr0--resp">
                {title} uses a combination of medical testing and recent
                lifestyle factors to evaluate each person’s risk and
                responsibility. Unlike the swab-based tests in short supply,
                {` ${title}`} testing will be broadly available.
              </p>
              <Button
                to="/solution"
                type="transparent,icon"
                className="flex-jc--c--resp"
              >
                <h4>Learn more</h4>
                <RightArrow />
              </Button>
            </div>
          </div>

          <div className="row mt100 flex-col-r--resp">
            <div className="col-6 flex flex-col center-text--resp">
              <h2 className="color--dark-purple pr40 pr0--resp">
                A way to find our new normal sooner
              </h2>
              <p>
                If we don't have a solution for demonstrating immunity at scale,
                we could see an incredibly prolonged lockdown with unimaginable
                social and economic consequences. Immunity Score is uniquely
                focused on this problem, and will be able to solve it quickly
                without compromising public health or individual security.
              </p>
              <Button
                to="/solution"
                type="transparent,icon"
                className="flex-jc--c--resp"
              >
                <h4>Learn more</h4>
                <RightArrow />
              </Button>
            </div>

            <div className="col-6 flex flex-col relative pl80 pl0--resp mb40--resp">
              <img
                src={assets.newNormalIll}
                className="w450 w300--resp"
                style={{ zIndex: 1 }}
              />
              <div className="radial-blur-circle radial-blur-circle--left" />
            </div>
          </div>

          <div className="row mt100 pb100">
            <div className="col-6 relative mb40--resp">
              <img
                src={assets.institutionsIll}
                className="ml10 ml0--resp w365 w250--resp"
                style={{ zIndex: 1 }}
              />
              <div className="radial-blur-circle radial-blur-circle--right" />
            </div>
            <div className="col-6 flex flex-col center-text--resp">
              <h2 className="color--dark-purple pr100 pr0--resp">
                A vital institution built for trust
              </h2>
              <p className="mr20 mr0--resp">
                Everyday people don't trust large institutions with their
                data—not government and not big tech. {title} exists solely to
                facilitate the safe reintegration of society by verifying
                Covid-19 immunity without compromising privacy or letting
                personal data fall into the wrong hands.
              </p>
              <Button
                to="/solution"
                type="transparent,icon"
                className="flex-jc--c--resp"
              >
                <h4>Learn more</h4>
                <RightArrow />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={assets.applicationsWave}
        className="bg--transparent full-width"
        style={{ marginBottom: "-5px" }}
      />

      <div className="row bg--off-white flex-col">
        <div className="relative container--large">
          <h4 className="color--dark-purple left mt20 flex-as--fs">
            Potential applications
          </h4>
          <Carousel>
            <div className="flex flex-col">
              <div className="h400 flex flex-col flex-jc--c">
                <img style={{ width: 300 }} src={assets.catchRideIll} />
              </div>
              <div className="flex flex-col h250 flex-ai--fs left">
                <h4 className="color--dark-purple">Catching a ride</h4>
                <p>
                  {title} will allow drivers and riders assess their individual
                  risk when accepting a ride share arrangement. Rideshare
                  partners will integrate Verified Immunity Scores into
                  profiles, so that for example, an immunosuppressed customer
                  could be paired with a high-scoring driver or only accept ride
                  with a specialized disinfection protocol.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h400 flex flex-col flex-jc--fs">
                <img style={{ width: 450 }} src={assets.healthcareWorkersIll} />
              </div>
              <div className="flex flex-col h250 flex-ai--fs left">
                <h4 className="color--dark-purple">
                  Clearing Healthcare Workers
                </h4>
                <p>
                  Healthcare works are at the highest risk for contracting
                  Covid-19, but essential on-going care, such as eldercare,
                  non-Covid outpatient and inpatient care, or dialysis, cannot
                  be neglected long-term. With {title}, healthcare workers who
                  have recovered from Covid-19 could safely return to the
                  frontlines where they’re needed most.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h400 flex flex-col flex-jc--fs">
                <img style={{ width: 300 }} src={assets.diningOutIll} />
              </div>
              <div className="flex flex-col h250 flex-ai--fs left">
                <h4 className="color--dark-purple">Dining Out</h4>
                <p>
                  Local restaurants have been some of the hardest hit by
                  shelter-in-place orders, with many forced to shutter and
                  layoff staff. A Verified Immunity Score will give restaurants
                  the confidence to schedule non-contagious employees and
                  welcome non-contagious guests to dine-in.
                </p>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="container--large pb150">
          <h4 className="left color--dark-purple">How it Works</h4>
          <img src={assets.diagram} width="100%" />
        </div>
      </div>
      <LinkFooter to="/solution" text="Our solution" />
    </div>
  )
}

export default IndexPage
