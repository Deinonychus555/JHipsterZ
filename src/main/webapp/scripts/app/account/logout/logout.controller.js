'use strict';

angular.module('jhipsterzzApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
