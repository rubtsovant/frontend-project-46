import yaml from 'js-yaml';

const parsers = (file, format) => {
  if (format === 'json') return JSON.parse(file);
  if (format === 'yml') return yaml.load(file);
  if (format === 'yaml') return yaml.load(file);
  return false;
};

export default parsers;
