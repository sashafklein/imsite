import React from "react"

const contentData = ({ title, shortTitle, assets }) => [
  {
    width: 450,
    asset: assets.healthcareWorkersIll,
    title: "Clearing healthcare workers",
    content: `The frontline health workforce’s role and collective capacity is under historic stress. Without tactical support, we expose healthcare workers and their patients to unnecessary risks. With ${shortTitle}, doctors, nurses, and caretakers can confidently return to the frontlines where they’re needed, and those with confirmed immunity status can be focused safely on serving the most vulnerable at-risk populations.`,
  },
  {
    width: 350,
    asset: assets.workIll,
    title: "Reopening the workforce",
    content: `Emergency measures that save lives have also brought economic activity to a near-halt. Increased screening and careful analysis of test data allows employers and local officials to safely re-open for business. ${shortTitle} allows businesses and government to base their critical decision-making on the high-confidence computed status of each individual’s combined test results.  Let’s get back to work and back to normal.`,
  },
  {
    width: 300,
    title: "Catching a ride",
    asset: assets.catchRideIll,
    content: `${shortTitle} will allow drivers and riders to assess their individual risk when calling a ride. Transportation partners can integrate ${shortTitle} scores into driver and passenger profiles, so that the elderly and immunosuppressed can regain their mobility. Transit systems could integrate ${shortTitle} to ensure safe transport for the broader population.`,
  },
  {
    width: 330,
    title: "Back to school",
    asset: assets.backToSchoolIll,
    content: `With primary schools suspended and entire university and college campuses shut down, teachers and students are struggling to maintain progress in a wholly new paradigm.  Parents also struggle as they juggle their other responsibilities with at-home kids and shuttered childcare. ${shortTitle} arms administrators with the information they need to keep their communities protected.`,
  },
]

export default data => {
  const content = contentData(data)
  return content.map(({ title, asset, width, content }, ind) => (
    <div className="flex flex-col pb40--resp" key={title}>
      <div className="h400 flex flex-col flex-jc--c">
        <img style={{ width }} alt={title} src={asset} />
      </div>
      <div className="flex flex-col h250 flex-ai--fs left">
        <h4 className="color--dark-purple">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  ))
}
