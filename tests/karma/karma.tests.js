import "core-js/stable";
import "regenerator-runtime/runtime";

const unitContext = require.context(
  '../../',
  false,
  /\.test\.js$/
)
unitContext.keys().forEach(unitContext)
