/*global require*/
require.config({
    paths: {
        autoassign: '/* @echo IMAGE_SERVER_URL */' + '/auto-assign-exit-date/js/autoassign'
    }
});
require(['autoassign'], function(autoassign) {
    'use strict';
    autoassign.insertExitDate();
});