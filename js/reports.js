var quarterReportJson = "[{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]},{\"year\":\"2016\",\"quarters\":[{\"date\":\"JAN-MAR2016\",\"numberOfCoaches\":0,\"numberOfVgLeaders\":454,\"numberOfVgMembers\":2184,\"numberOfVictoryGroups\":479},{\"date\":\"APR-JUN2016\",\"numberOfCoaches\":34,\"numberOfVgLeaders\":327,\"numberOfVgMembers\":1529,\"numberOfVictoryGroups\":326},{\"date\":\"JUL-SEP2016\",\"numberOfCoaches\":53,\"numberOfVgLeaders\":306,\"numberOfVgMembers\":1199,\"numberOfVictoryGroups\":292},{\"date\":\"OCT-DEC2016\",\"numberOfCoaches\":47,\"numberOfVgLeaders\":255,\"numberOfVgMembers\":1540,\"numberOfVictoryGroups\":341}]}]";

var monthlyReportJson = "{\"date\":\"November 2016\",\"youthServiceAttendance\":4062,\"tnoeCount\":3586,\"salvationStory\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lectus iaculis enim luctus consequat ut semper magna. Phasellus eget varius velit. Donec fermentum imperdiet justo, eget lobortis lectus accumsan et. Quisque aliquam ut risus et convallis. Praesent feugiat porta tortor, et volutpat odio facilisis at. Cras sed blandit libero, sed dapibus nunc. Integer sagittis maximus elementum. Curabitur ac feugiat orci, nec fermentum elit. Nulla elementum, tortor a imperdiet rhoncus, tortor lectus vehicula magna, sit amet pulvinar odio leo eget elit. Donec efficitur, turpis fringilla fermentum fringilla, sem velit semper quam, nec eleifend ligula erat sed magna. Nulla sodales eu elit in pulvinar.\",\"evangelismStory\":\"Aenean cursus nunc ac sollicitudin volutpat. Proin tempor, nibh in maximus interdum, tortor mauris dictum orci, at porttitor velit urna sed odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dictum sapien in enim aliquet, at congue purus faucibus. Etiam a luctus est. Phasellus non mattis nisi. Duis euismod blandit nunc, et suscipit nisl. In pretium id est at auctor. Mauris fermentum, mauris id tincidunt lacinia, lectus tortor sollicitudin nisi, sit amet luctus magna eros et nisi. Integer ac tincidunt nibh. Fusce blandit ipsum eu efficitur sodales.\",\"newVictoryWeekendStory\":\"In justo enim, luctus quis eros nec, imperdiet laoreet nisl. Pellentesque feugiat egestas mi, quis dapibus nibh dapibus nec. Cras neque dui, accumsan vel faucibus cursus, mollis sed massa. Quisque sed turpis nec orci mollis ullamcorper ut vitae lacus. Duis bibendum ante at auctor mattis. Fusce at velit vehicula, commodo risus vitae, viverra ipsum. Vivamus semper iaculis suscipit. Donec placerat, nisi et cursus congue, enim dolor ullamcorper justo, a hendrerit ligula libero et sapien.\",\"newVictoryGroupLeaderStory\":\"Praesent aliquet odio aliquam, aliquam urna id, sodales justo. Maecenas posuere nulla dolor. Aliquam erat volutpat. Nullam scelerisque efficitur est, id laoreet turpis maximus quis. Aenean pharetra tincidunt libero, ac malesuada eros posuere quis. Integer scelerisque dui id tincidunt congue. Proin auctor velit ut dui suscipit accumsan. Sed vitae tristique leo. Morbi id felis tincidunt, congue urna quis, imperdiet nunc. Nam purus neque, tristique posuere finibus vitae, blandit quis neque. Suspendisse eu congue nisi. Nam ex lorem, malesuada eget luctus non, auctor at risus.\",\"attendanceArray\":[7,69,95,145,184,215,252,265,233,183,139,96],\"tnoeCountArray\":[39,42,57,85,119,152,170,166,142,103,66,48]}";

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

function initMonthlyReport()
{
    console.log("initMonthlyReport");
    
    
    //TODO replace with actual asynchronous request from server
    var monthlyJsonObj = JSON.parse(monthlyReportJson);
    
     //table initialization
    var table = $('<table></table>').addClass('monthlyReport');
    var tr = '<tr>' ;
    tr += "<td class=\"inputtedMonthYear\">"+monthlyJsonObj.date+"</td>";
    tr += "<td class=\"ReportTitle\">Monthly Report</td>";
    tr += '</tr>';
    table.append(tr);


    tr = "<tr>";
    tr += "<td class=\"CountPart\">";
    tr += "<font style=\"font-size: 40px;\"><b>4062</b></font>";
    tr += "<br/>";
    tr += "<font style=\"font-size: 13px;\">YOUTH SERVICE ATTENDANCE</font>";
    tr += "</td>";
    tr += "<td class=\"CountPart\">";
    tr += "<font style=\"font-size: 40px;\"><b>3586</b></font>";
    tr += "<br/>";
    tr += "<font style=\"font-size: 13px;\">TNOE COUNT</font>";
    tr += "</td>";
    tr += "</tr>";
    table.append(tr);
    
    //salvation start
    tr = "<tr>";
    tr += "<td class=\"LabelStories\" colspan=\"2\">Salvation Story</td>";
    tr += "</tr>";
    table.append(tr);

    tr = "<tr>";
    tr += "<td class=\"DescStories\" colspan=\"2\">"+monthlyJsonObj.salvationStory+"</td>";
    tr += "</tr>";
    table.append(tr);
    //salvation end

    //evangelism story start
    tr = "<tr>";
    tr += "<td class=\"LabelStories\" colspan=\"2\">Evangelism Story</td>";
    tr += "</tr>";
    table.append(tr);
                
    tr = "<tr>";
    tr += "<td class=\"DescStories\" colspan=\"2\">"+monthlyJsonObj.evangelismStory+"</td>"; //TODO
    tr += "</tr>";
    table.append(tr);
    //evangelism story end
    

    //new victory weekend story start
    tr = "<tr>";
    tr += "<td class=\"LabelStories\" colspan=\"2\">New Victory Weekend Story</td>";
    tr += "</tr>";
    table.append(tr);
                
    tr = "<tr>";
    tr += "<td class=\"DescStories\" colspan=\"2\">"+monthlyJsonObj.newVictoryWeekendStory+"</td>"; //TODO
    tr += "</tr>";
    table.append(tr);
    //new victory weekend story end

    //new victory weekend story start
    tr = "<tr>";
    tr += "<td class=\"LabelStories\" colspan=\"2\">New Victory Group Leader Story</td>";
    tr += "</tr>";
    table.append(tr);
                
    tr = "<tr>";
    tr += "<td class=\"DescStories\" colspan=\"2\">"+monthlyJsonObj.newVictoryGroupLeaderStory+"</td>"; //TODO
    tr += "</tr>";
    table.append(tr);
    //new victory weekend story end
   
        
    //chart initialization
    var ysOptions = {
        chart: {
        renderTo: 'ysAttendanceGraph',
        type: 'line'
        },

        title: {
            text: 'YOUTH SERVICE ATTENDANCE SUMMARY'
        },
         xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            data: monthlyJsonObj.attendanceArray
        }]
    };
    
    //var tnoeContainer = $('<div></div>').addClass('quarterlyGraph').attr('id', 'tnoeGraph');
        
    //chart initialization
    var tneoOptions = {
        chart: {
        renderTo: 'tnoeGraph',
        type: 'line'
        },

        title: {
            text: 'TNOE Envelopes'
        },
         xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            data: monthlyJsonObj.tnoeCountArray
        }]
    };
    

    tr = "<tr>";
    tr += "<td rowspan=\"2\" colspan=\"2\" style='padding-top: 20px;'>";
    tr += "<div class=\"quarterlyGraph\" id=\"ysAttendanceGraph\"></div><br/>";
    tr += "<div class=\"quarterlyGraph\" id=\"tnoeGraph\"></div>";
    tr += "</td>"; //TODO
    tr += "</tr>";
    table.append(tr);
    
    
    $("#report").append(table);
        
    var chart = new Highcharts.Chart(ysOptions);
    chart = new Highcharts.Chart(tneoOptions);
    
    
    
}
