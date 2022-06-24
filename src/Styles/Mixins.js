import Variables from "../Variables.js"

const screenSpXs = () => {
  return `@media screen and (max-width: ${Variables.breakPointSpXs + 1}px)`
}

const screenSp = () => {
  return `@media screen and (max-width: ${Variables.breakPointPc - 1}px)`
}

const screenPc = () => {
  return `@media screen and (min-width: ${Variables.breakPointPc}px)`
}

const svg = () => {
  return "svg, path, rect, polygon, g"
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  screenSpXs,
  screenSp,
  screenPc,
  svg
}