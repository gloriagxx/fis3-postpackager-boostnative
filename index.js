'use strict';

module.exports = function(ret, conf, settings, opt) {
    var content = 'window.boost && boost.addStyle && boost.addStyle("';

    for (var key in ret.src) {
        var item = ret.src[key];
        if (key.indexOf('.css') >= 0) {
            content += item._content.replace(/[\n]/ig, '');
        }
    }

    content += '")';
    var path = fis.project.getProjectPath() + '/static/js/boostNative.js';

    var file = fis.file(path);
    file.setContent(content);

    ret.pkg[file.subpath] = file;
}