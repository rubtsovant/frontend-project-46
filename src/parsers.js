import yaml from 'js-yaml';

const parsers = (file, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    default:
      return false;
  }
};

export default parsers;
