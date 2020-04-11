import React from "react"

const contentData = ({ title, assets }) => [
  {
    width: 450,
    asset: assets.healthcareWorkersIll,
    title: "Clearing healthcare workers",
    content: `Healthcare works are at the highest risk for contracting COVID-19, but essential on-going care, such as eldercare, non-COVID outpatient and inpatient care, or dialysis, cannot be neglected long-term. With ${title}, healthcare workers who have recovered from COVID-19 could safely return to the frontlines where they’re needed most.`,
  },
  {
    width: 400,
    asset: assets.workIll,
    title: "Liberating the workforce",
    content: `Emergency measures that saved lives have also brought economic activity to a halt. ${title}'s integrated screening and analysis will allow employers and local officials to safely re-open for business, enabling business and government to base critical decision-making on the high-confidence computed status of each individual's combined test results.`,
  },
  {
    width: 300,
    title: "Catching a ride",
    asset: assets.catchRideIll,
    content: `${title} will allow drivers and riders assess their individual risk when accepting a ride share arrangement. Rideshare partners will integrate Verified Immunity Scores into profiles, so that for example, an immunosuppressed customer could be paired with a high-scoring driver or only accept ride with a specialized disinfection protocol.`,
  },
  {
    width: 380,
    title: "Back to school",
    asset: assets.backToSchoolIll,
    content: `With Pre-K-12 schools shuttered and entire university and college campuses shut down, teachers and students are struggling to maintain progress in a wholly new paradigm.  Parents also struggle as they juggle their other responsibilities with at-home kids. ${title} will help us restart the school system, while limiting danger to those most at risk.`,
  },
]

export default data => {
  console.log("DATA", data)
  const content = contentData(data)
  return content.map(({ title, asset, width, content }, ind) => (
    <div className="flex flex-col pb40--resp" key={title}>
      <div className="h400 flex flex-col flex-jc--fs">
        <img style={{ width }} alt={title} src={asset} />
      </div>
      <div className="flex flex-col h250 flex-ai--fs left">
        <h4 className="color--dark-purple">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  ))
}
