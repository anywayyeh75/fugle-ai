import baseConfig from 'eslint-config-next'
import typescriptConfig from 'eslint-config-next/typescript'

const eslintConfig = [
  ...baseConfig,
  ...typescriptConfig,
]

export default eslintConfig
