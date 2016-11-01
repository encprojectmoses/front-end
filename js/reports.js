function initQuarterlyReport()
{
	console.log("initQuarterlyReport");
	$('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'DISCIPLESHIP SUMMARY'
        },
        xAxis: {
            categories: [
                'LEADERSHIP GROUP',
                'VG LEADERS',
                'VG MEMBERS',
                'VICTORY GROUPS',
            ],
            crosshair: true
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                 dataLabels: {
                    enabled: true
                },
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'NOV2014 - MAR2015',
            data: [0, 454, 2184, 479]

        }, {
            name: 'JUN2015 - SEP2015',
            data: [34, 327, 1529, 326]

        }, {
            name: 'NOV2015 - APR2016',
            data: [53, 306, 1199, 292]

        }, {
            name: 'JUN2016 - SEP2016',
            data: [47, 255, 1540, 341]

        }]
    });
}