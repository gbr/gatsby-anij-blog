import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ["Roboto", "Arial", "sans"],
  bodyFontFamily: ["Roboto", "Arial", "sans"],
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  bodyWeight: 400,
  headerWeight: 700,
  includeNormalize: true, // set to false if any issues
})
export const { scale, rhythm, options } = typography
export default typography
