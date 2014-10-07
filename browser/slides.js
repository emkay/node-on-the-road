var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start,
    phpToNode,
    whereWeAre,
    whereWeAre2,
    graph,
    whereWeAre3,
    ynpm,
    ynpmStats,
    registryStatic,
    theFuture,
    openSource,
    devs,
    jsla
];

function start(state) {
    return h('div#app', [
        h('h1', 'Yahoo'),
        h('div.heart'),
        h('h1', 'Node.js'),
        h('div.elephant'),
        h('div.pine-high'),
        h('div.pine-mid'),
        h('div.me', [
            h('h2', '@mmatuzak')
        ])
    ]);
}

function devs(state) {
    return h('div#app', [
        h('h1', 'Developers'),
        h('div.heart'),
        h('h1', 'Node.js'),
        h('div.elephant'),
        h('div.pine-high'),
        h('div.pine-mid'),
    ]);
}

function phpToNode(state) {
    return h('div#app', [
        h('h1', 'The Road to Node.js'),
        h('div.elephant'),
        h('ul', [
            h('li', 'PHP Platform running 100s of sites'),
            h('li', 'A huge rewrite not very practical for all sites'),
            h('li', 'Yahoo Screen went from php to Node.js in 53 days')
        ]),
        h('div.pine-mid'),
        h('div.pine-high'),
        h('div.shark')
    ]);
}

function whereWeAre(state) {
    return h('div#app', [
        h('h1', 'Where We Are'),
        h('div.elephant'),
        h('ul', [
            h('li', 'Yahoo Screen is fully using Node.js'),
            h('li', 'New Video Player uses browserify'),
            h('li', 'Media sites like News, Sports, Finance, etc. are all using modules served by Node.js'),
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function whereWeAre2(state) {
    return h('div#app', [
        h('h1', 'Where We Are'),
        h('div.elephant'),
        h('ul', [
            h('li', 'Yahoo is now using Node to serve tens of thousands of requests per second'),
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function graph(state) {
    return h('img', {src: '/static/images/yamas.png', width: '1280', height: '1024'});
}

function whereWeAre3(state) {
    return h('div#app', [
        h('h1', 'Where We Are'),
        h('div.elephant'),
        h('ul', [
            h('li', 'CI/CD Tools written in Node.js'),
            h('li', 'Private NPM Server'),
            h('li', 'Custom npm client `ynpm`')
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function ynpm(state) {
    return h('div#app', [
        h('h1', 'YNPM'),
        h('div.dav'),
        h('div.ynpm'),
        h('div.elephant'),
        h('ul', [
            h('li', 'Fancy `npm init`'),
            h('li', 'White list of modules'),
            h('li', 'Internal Search'),
            h('li', 'Automagic setup of CI')
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function ynpmStats(state) {
    return h('img', {src: '/static/images/ynpm-usage.png', width: '1280', height: '1024'});
}

function registryStatic(state) {
    return h('div#app', [
        h('h1', 'davglass/registry-static'),
        h('div.dav'),
        h('div.ynpm'),
        h('div.elephant'),
        h('ul', [
            h('li', 'Flat file npm registry mirror')
        ]),
        h('div.pine-mid'),
        h('div.pine-high'),
        h('div.shark')
    ]);
}

function theFuture(state) {
    return h('div#app', [
        h('h1', 'The Future'),
        h('div.elephant'),
        h('ul', [
            h('li', 'Building React/Flux apps'),
            h('li', 'Browserify/Webpack'),
            h('li', 'More Open Source')
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function openSource(state) {
    return h('div#app', [
        h('h1', 'Open Source Everything'),
        h('div.elephant'),
        h('ul', [
            h('li', 'yahoo/dispatchr'),
            h('li', 'yahoo/routr'),
            h('li', 'yahoo/fetchr'),
            h('li', 'yahoo/gifshot')
        ]),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function jsla(state) {
    return h('div#app', [
        h('h1', 'JS.LA'),
        h('div.elephant'),
        h('h2', 'If you had fun tonight we do this every month at js.la'),
        h('div.pine-mid'),
        h('div.pine-high')
    ]);
}

function Slides(state) {
    return slides[state.slide];
}

module.exports = {
    render: Slides,
    len: slides.length
}
