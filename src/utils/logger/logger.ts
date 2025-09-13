// eslint-disable no-console

const prefix = (color: string, feature?: string, unit?: string) => {
  let str = `\x1B[${color}m`;
  str += `[${new Date().toLocaleString()}]`;
  feature && (str += `[${feature}]`);
  unit && (str += `[${unit}]`);
  str += "\x1B[39m";
  return str;
};

const { log, error, warn } = console;

const logger = {
  log: (feature?: string, unit?: string, ...message: any) => {
    log(prefix("32", feature, unit), "-", ...message);
  },
  warn: (feature?: string, unit?: string, ...message: any) => {
    warn(prefix("33", feature, unit), "-", ...message);
  },
  error: (feature?: string, unit?: string, ...message: any) => {
    error(prefix("31", feature, unit), "-", ...message);
  },
};

export default logger;
