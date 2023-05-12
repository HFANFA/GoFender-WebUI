requirejs.config({
    //this apiaddr is for the GoFender API
     apiaddr: "http://127.0.0.1:8888",
    baseUrl: 'js/lib',
    paths: {
        jquery: 'http://cdn.staticfile.org/jquery/1.7.2/jquery.min',
        underscore: 'http://cdn.staticfile.org/underscore.js/1.7.0/underscore-min'
    },
    packages: [
        {
            name: 'echarts',
            location: 'echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: 'zrender/src',
            main: 'zrender'
        }
    ]
});