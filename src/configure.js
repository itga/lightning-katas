'use strict';
var _ = require('lodash');

module.exports = function (overrided_user_profile) {
//    var default_user_profile = _.defaults({
//        user:     'user',
//        password: 'password',
//        url:      'http://github.com'
//    });
//
//    return _.merge(default_user_profile, overrided_user_profile);

    // Without lodah
    var user_profile = {
        user:     'user',
        password: 'password',
        url:      'http://github.com'
    };

    user_profile.user     = overrided_user_profile.user     || user_profile.user;
    user_profile.password = overrided_user_profile.password || user_profile.password;
    user_profile.url      = overrided_user_profile.url      || user_profile.url;

    return user_profile;
};