import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
 
const ignoredLintTargets = [
  '.next/**',
  'out/**',
  'build/**',
  'next-env.d.ts',
]

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores(ignoredLintTargets),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/display-name": "off"
    }
  }
])
 
export default eslintConfig