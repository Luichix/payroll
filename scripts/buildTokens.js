const { choices, decisions } = require('./assets/tokens');
const toKebabCase = require('./helpers/toKebabCase');
const fs = require('fs');

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n');

function transformTokensCSS(parentKey, object) {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokensCSS, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokensCSS}\n  --${customProperty}: ${value.join(
        ', '
      )};`;
    } else if (typeof value === 'object') {
      return `${transformedTokensCSS}\n${transformTokensCSS(
        customProperty,
        value
      )}`;
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokensCSS}\n  ${label}: ${value};`;
  }, '');
}

function buildTokens() {
  const transformedChoices = transformTokensCSS(null, choices);
  const transformedDecisions = transformTokensCSS(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile('./src/scripts/archive/tokens.css', data, 'utf8', (error) => {
    if (error) throw error;
    console.log('🎨 Custom properties created!');
  });
}

buildTokens();
