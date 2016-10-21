System.config({
    map: {
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        'moment': 'node_modules/moment/moment.js',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});