import stylish from './stylish.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    default:
      return false;
  }
};

export default formatter;
