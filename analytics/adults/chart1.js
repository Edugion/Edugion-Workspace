window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            title: {
                text: "Video Score"
            },
            data: [{
                type: "area",
                dataPoints: []
            }]
        });

        addDataPoints(chart,100);

        var chart2 = new CanvasJS.Chart("chartContainer2", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            title: {
                text: "No. of question answered"
            },
            data: [{
                type: "area",
                dataPoints: []
            }]
        });

        addDataPoints(chart2,10);

    const chart3 = new CanvasJS.Chart("chartContainer3", {
        theme: "light2", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Your most viewed News RSS Channel"
        },
        axisX: {
            margin: 10,
            labelPlacement: "inside",
            tickPlacement: "inside"
        },
        axisY2: {
            title: "Views",
            titleFontSize: 14,
            includeZero: true,
            suffix: "times"
        },
        data: [{
            type: "bar",
            axisYType: "secondary",
            yValueFormatString: "#,###.##",
            indexLabel: "{y}",
            dataPoints: [
                {label: "Channel A", y: 6},
                {label: "Channel B", y: 9},
                {label: "Channel C", y: 10},
                {label: "Channel D", y: 11},
                {label: "Channel E", y: 12},
                {label: "Channel F", y: 16},
                {label: "Channel G", y: 20},
                {label: "Channel H", y: 26},
                {label: "Channel I", y: 31},
                {label: "Channel J", y: 39}
            ]
        }]
    });


    const chart4 = new CanvasJS.Chart("chartContainer4", {
        theme: "light2", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Skills related to the field"
        },
        axisX: {
            margin: 10,
            labelPlacement: "inside",
            tickPlacement: "inside"
        },
        axisY2: {
            title: "Views",
            titleFontSize: 14,
            includeZero: true,
            suffix: "times"
        },
        data: [{
            type: "bar",
            axisYType: "secondary",
            yValueFormatString: "#,###.##",
            indexLabel: "{y}",
            dataPoints: [
                {label: "Communication", y: 5},
                {label: "SQL", y: 7},
                {label: "Java", y: 8},
                {label: "Python", y: 10},
                {label: "Leadership", y: 10}
            ]
        }]
    });

    chart.render();
    chart2.render();
    chart3.render();
    chart4.render();
    popUpButton(chart3)

        function popUpButton(chart) {
            const select = document.getElementById("channels");
            for (let i = 0; i < chart.data[0].dataPoints.length; i++) {
                if (chart.data[0].dataPoints[i].y >= 26) {
                    console.log(chart.data[0].dataPoints[i].y)
                    var option = document.createElement('option');
                    option.text = option.value = chart.data[0].dataPoints[i].label;
                    select.add(option, 0);
                    // document.getElementById("buttons").innerHTML +=
                    //     "<button> Open the RSS channel chat </button>"
                }
            }
        }

        function addDataPoints(chart, noOfDps) {
            var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
            for(var i = 0; i < noOfDps; i++) {
                yVal = yVal +  Math.round(5 + Math.random() * (-5-5));
                chart.options.data[0].dataPoints.push({x: xVal,y: yVal});
                xVal++;
            }
        }

        /*
        * When one of the channel is read until 20 times, the chat will pop up
        * */
    };