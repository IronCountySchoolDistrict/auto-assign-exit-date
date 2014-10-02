/*global require*/
require.config({
    paths: {
        autoassign: 'AutoAssignExitDateSpecialPrograms/autoassign'
    }
});
require(['autoassign'], function(autoassign) {
    'use strict';
    autoassign.main();
});