/*global $j, require, custom*/
require.config({
    paths: {
        autoassign: '/scripts/AutoAssignExitDateSpecialPrograms/autoassign',
        psData: '/admin/students/AutoAssignExitDateSpecialPrograms'
    }
});

require(['autoassign', 'noext!psData/psData.txt'], function(autoassign, psData) {
    'use strict';
    $j('body').children().not('#qunit').css({'display': 'none'});

    test('psData is properly populated with data', function () {
        equal(typeof psData, 'object', 'psData is an object');
        equal(typeof psData.exitDate, 'string', 'exitDate is rendered as a string');
    });

    test('exit date gets inserted', function () {
        autoassign.insertExitDate();
        equal($j('.psDateWidget').eq(1).val(), psData.exitDate, 'Exit date in DOM matches value in psData');
    });
});