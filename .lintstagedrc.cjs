const buildEslintCommand = (filenames) => `eslint --fix ${filenames.join(' ')}`;

module.exports = {
  '*.{js,ts,jsx,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,scss,json,md}': ['prettier --write'],
};
