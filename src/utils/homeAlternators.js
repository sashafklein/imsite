export default ({ assets, shortTitle }) => [
  {
    img: {
      src: assets.metricIll,
      className: "ml10 ml0--resp w365 w250--resp",
    },
    title: "A metric of health available to all",
    content: `${shortTitle} combines medical testing, the latest research, and statistical analysis to evaluate each individual’s immunological safety status. As laboratory and at-home tests become more broadly available, both antibody and active infection tests will provide critical results. We stitch together individual test data points to arrive at a high-confidence, actionable value.`,
  },
  {
    img: {
      src: assets.newNormalIll,
      className: "w450 w300--resp",
    },
    title: `A way to find our new normal sooner`,
    content: `Without a solution for establishing immune safety at scale, we could see an incredibly prolonged lockdown with unimaginable social and economic consequences. ${shortTitle} is uniquely focused on this problem, and will be able to solve it quickly without compromising individual privacy or public health.`,
  },
  {
    img: {
      src: assets.institutionsIll,
      className: "ml10 ml0--resp w365 w250--resp",
    },
    title: `A vital institution built for trust`,
    content: `Everyday people don’t trust large institutions with their data—not governments and not big tech. We founded ${shortTitle} to solve this urgent problem without sacrificing an inch of privacy, individual control, and civil liberty.  Your personal records are encrypted at rest and in transit, separated from identifying information, and only shared with your explicit approval and consent.`,
  },
]
