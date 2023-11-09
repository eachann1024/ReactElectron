const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  extends: [
    './.eslintrc-auto-import.json',
  ],
})
