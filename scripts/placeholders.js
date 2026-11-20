import { toCamelCase } from './aem.js';

// eslint-disable-next-line import/prefer-default-export
export async function fetchPlaceholders(prefix = 'default') {
  window.placeholders = window.placeholders || {};
  if (!window.placeholders[prefix]) {
    window.placeholders[prefix] = (async () => {
      const path = `${prefix === 'default' ? '' : prefix}/placeholders.json`;
      const response = await fetch(path);
      if (response.status === 404) {
        // eslint-disable-next-line no-console
        console.warn(`No placeholders sheet at ${path}; using default carousel labels.`);
        return {};
      }
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
      }
      const json = await response.json();
      if (!Array.isArray(json.data)) {
        throw new Error(`Invalid placeholders sheet at ${path}: expected a data array.`);
      }
      const placeholders = {};
      json.data.filter((entry) => entry.Key).forEach((entry) => {
        placeholders[toCamelCase(entry.Key)] = entry.Text;
      });
      return placeholders;
    })();
  }
  return window.placeholders[prefix];
}
