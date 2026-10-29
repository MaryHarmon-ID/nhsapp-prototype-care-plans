const {
  activeFakeCarePlanDataset,
  fakeCarePlanDatasets
} = require('./data/fakeCarePlanData')

module.exports = function(req, res, next) {

  // You can set any additional local variables here.
  // These will be made available to any views
  //
  // For example:
  //
  // res.locals.organisationName = 'NHS'

  // Care plan used by the templated pages (round-5-templated).
  // Defaults to activeFakeCarePlanDataset; override per session with
  // ?carePlanDataset=sample-two (any key from fakeCarePlanDatasets).
  const data = (req.session && req.session.data) || {}
  const datasetName = fakeCarePlanDatasets[data.carePlanDataset]
    ? data.carePlanDataset
    : activeFakeCarePlanDataset

  res.locals.carePlanDatasetName = datasetName
  res.locals.carePlan = fakeCarePlanDatasets[datasetName]

  // Every dataset, for listing links on the index page. Datasets whose name
  // ends in "-partial" use the templated partial journey.
  res.locals.carePlanDatasetLinks = Object.keys(fakeCarePlanDatasets).map(function (name) {
    const isPartial = name.endsWith('-partial')
    return {
      name: name,
      isPartial: isPartial,
      journey: isPartial ? 'round-5-templated-partial' : 'round-5-templated'
    }
  })

  next()
}
