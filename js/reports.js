var quarterReportJson = "[{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]}]";

function initQuarterlyReport()
{
 
    console.log("initQuarterlyReport");
    
    
    //TODO replace with actual asynchronous request from server
    var quarterJsonObj = JSON.parse(quarterReportJson);
    
    //create table and graph for each content
    for(var i=0; i<quarterJsonObj.length; i++)
    {       
        
        var graphContainer = $('<div></div>').addClass('quarterlyGraph').attr('id', 'graph'+i);
        
        //chart initialization
        var options = {
            chart: {
            renderTo: 'graph'+i,
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

            series: []
        };
        
        //table initialization
        var table = $('<table></table>').addClass('quarterlyReport').attr('id', 'report'+i);
        table.append( '<tr>' );
        table.append( '<th>Date</th>' );
        table.append( '<th>Number of Leadership Group</th>' );
        table.append( '<th>Number of Victory Group Leaders</th>' );
        table.append( '<th>Number of Victory Group Members</th>' );
        table.append( '<th>Number of Victory Groups</th>' );
        table.append( '</tr>' );
        
        for(var j=0; j<quarterJsonObj[i].quarters.length; j++)
        {
            
            //chart update
            var sampleObject = {
                name: quarterJsonObj[i].quarters[j].date,
                data: [quarterJsonObj[i].quarters[j].numberOfCoaches,
                       quarterJsonObj[i].quarters[j].numberOfVgLeaders,
                       quarterJsonObj[i].quarters[j].numberOfVgMembers,
                       quarterJsonObj[i].quarters[j].numberOfVictoryGroups]
            };

            options.series.push(sampleObject);
            
            //table update
            
            table.append( '<tr>' );
            table.append( '<td>'+quarterJsonObj[i].quarters[j].date+'</td>');
            table.append( '<td>'+quarterJsonObj[i].quarters[j].numberOfCoaches+'</td>');
            table.append( '<td>'+quarterJsonObj[i].quarters[j].numberOfVgLeaders+'</td>');
            table.append( '<td>'+quarterJsonObj[i].quarters[j].numberOfVgMembers+'</td>');
            table.append( '<td>'+quarterJsonObj[i].quarters[j].numberOfVictoryGroups+'</td>');
            table.append( '</tr>' );
            
            
        }   
        
        $("#reports").append(table);
        $("#reports").append(graphContainer);
        
        var chart = new Highcharts.Chart(options);
        //console.log(quarterJsonObj[i].date+", "+quarterJsonObj[i].numberOfCoaches+", "+quarterJsonObj[i].numberOfVgLeaders+", "+quarterJsonObj[i].numberOfVgMembers+", "+quarterJsonObj[i].numberOfVictoryGroups);
    }
    
    
    

}