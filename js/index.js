$(function(){
    //section8中的盒子
    var $tabs = $('.tabs .photo a');
    $tabs.each(function () {
        $(this).on('mouseover', function () {
            $(this).css("background","#8e9ab0");
            var href = $(this).attr('href');
            $tabs.each(function () {
                var href = $(this).attr('href');
                $(href).addClass('hide');
            });
            $(href).removeClass('hide');

        });
    });
    //柱状图
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('canvas'));
    /* var myMap=echarts.init(document.getElementById('map'));*/
    // 指定图表的配置项和数据
    var option;
    option = {
        tooltip: {},
        legend: {
            data: ['CSS']
        },
        xAxis: {
            data: ["CSS", "JavaScript", "HTML"]
        },
        yAxis: {},
        series: [{
            type: 'bar',
            data: [70, 50, 30]
        }],
        barWidth:50,
        color:["#ffbd31","#6ee690","#f3709b"]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    setInterval(function(){
        var myChart = echarts.init(document.getElementById('canvas'));
        /* var myMap=echarts.init(document.getElementById('map'));*/
        // 指定图表的配置项和数据
        var option;
        option = {
            tooltip: {},
            legend: {
                data: ['CSS']
            },
            xAxis: {
                data: ["CSS", "JavaScript", "HTML"]
            },
            yAxis: {},
            series: [{
                type: 'bar',
                data: [70, 50, 30]
            }],
            barWidth:50,
            color:["#ffbd31","#6ee690","#f3709b"]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },7000);



});