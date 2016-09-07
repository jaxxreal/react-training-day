module.exports = {
    path: 'counter',
    getComponent(location, cb) {
        require.ensure([], require => {
            cb(null, require('./Counter')); // why? Because we want to load route in async way
        });
    },
};
