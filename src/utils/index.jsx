export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const services = {
  classNames
}

export default services;