import yaml from 'js-yaml';

const dataParser = (data, ext) => {
  switch (ext) {
    case '.json': {
      return JSON.parse(data);
    }
    case '.yml':
    case '.yaml': {
      return yaml.load(data);
    }
    default: {
      return undefined;
    }
  }
};

export default dataParser;
