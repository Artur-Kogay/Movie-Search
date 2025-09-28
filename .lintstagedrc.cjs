const buildEslintCommand = (filenames) =>
  `eslint --fix --ext .js,.ts,.jsx,.tsx ${filenames.map((f) => `"${f}"`).join(' ')}`;

module.exports = {
  '*.{js,ts,jsx,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,scss,json,md}': ['prettier --write'],
};
