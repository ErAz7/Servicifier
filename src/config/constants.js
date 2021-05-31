import { version } from '../../package.json';

const dynamicConfig = {};

const staticConfig = {
    VERSION: version
};

module.exports = {
    ...dynamicConfig,
    ...staticConfig
};
