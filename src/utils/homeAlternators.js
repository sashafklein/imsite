export default ({ assets, title }) => [
  {
    img: {
      src: assets.metricIll,
      className: "ml10 ml0--resp w365 w250--resp",
    },
    title: "A metric of health available to all",
    content: `${title} uses a combination of medical testing and recent lifestyle factors to evaluate each person’s risk and responsibility. Unlike the swab-based tests in short supply, ${title} testing will be broadly available.`,
  },
  {
    img: {
      src: assets.newNormalIll,
      className: "w450 w300--resp",
    },
    title: `A way to find our new normal sooner`,
    content: `If we don't have a solution for demonstrating immunity at scale, we could see an incredibly prolonged lockdown with unimaginable social and economic consequences. ${title} is uniquely focused on this problem, and will be able to solve it quickly without compromising public health or individual security.`,
  },
  {
    img: {
      src: assets.institutionsIll,
      className: "ml10 ml0--resp w365 w250--resp",
    },
    title: `A vital institution built for trust`,
    content: `Everyday people don't trust large institutions with their data—not government and not big tech. ${title} exists solely to facilitate the safe reintegration of society by verifying COVID-19 immunity without compromising privacy or letting personal data fall into the wrong hands.`,
  },
]
