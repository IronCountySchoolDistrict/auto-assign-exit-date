/*global require*/
require.config({
    paths: {
        autoassign: '/scripts/auto-assign-exit-date/js/autoassign'
    }
});
require(['autoassign'], function(autoassign) {
    'use strict';
    autoassign.insertExitDate();
});
