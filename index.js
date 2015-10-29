'use strict';

module.exports = function(ret, conf, settings, opt) {
    var content = 'window.boost && boost.addStyle && boost.addStyle("';
    var boostFile = ret.src[settings.addTo];

    for (var key in ret.src) {
        var item = ret.src[key];
        if (key.indexOf('.css') >= 0) {
            content += item._content.replace(/[\n]/ig, '');
        }

    }

    content += '")';

    boostFile.setContent(boostFile._content + content);
}