Highcharts.chart('over-all', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
                ' ' : 'Pinch chart to zoom in'
    },
    xAxis: {
        type: 'text',
        title: {
            text: "Month"
        }
    },
    yAxis: {
        title: {
            text: 'Hours spent'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'Spent time',
        data: [
            [
                "Jan",
                 5
            ],
            [
                "Feb",
                 6
            ],
            [
                "Mar",
                7
            ],
            [
                "Apr",
                9
            ],
            [
                "May",
                11
            ],
            [
                "Jun",
                14
            ],
            [
                "Jul",
                8
            ],
            [
                "Aug",
                10
            ],
            [
                "Sep",
                7
            ]
        ]
    }]
});