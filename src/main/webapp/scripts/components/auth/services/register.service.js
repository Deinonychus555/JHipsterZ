'use strict';

angular.module('jhipsterzzApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


