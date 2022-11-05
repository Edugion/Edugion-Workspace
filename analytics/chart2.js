window.onload = function () {

    var chart = new CanvasJS.Chart("chaContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: "Total Score"
        },
        data: [{
            type: "area",
            dataPoints: []
        }]
    });

    addDataPoints(chart, 100);

    var chart2 = new CanvasJS.Chart("chaContainer2", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: "metricsmega.md 1"
        },
        data: [{
            type: "area",
            dataPoints: []
        }]
    });

    addDataPoints(chart2, 100);

    var chart3 = new CanvasJS.Chart("chaContainer3", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: "metricsmega.md 2"
        },
        data: [{
            type: "area",
            dataPoints: []
        }]
    });

    addDataPoints(chart3, 100);

    var chart4 = new CanvasJS.Chart("chaContainer4", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: "metricsmega.md 3"
        },
        data: [{
            type: "area",
            dataPoints: []
        }]
    });

    addDataPoints(chart4, 100);

    var chart5 = new CanvasJS.Chart("chaContainer5", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: "metricsmega.md 4"
        },
        data: [{
            type: "area",
            dataPoints: []
        }]
    });

    addDataPoints(chart5, 100);

    chart.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();

    function addDataPoints(chart, noOfDps) {
        let xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
        for (var i = 0; i < noOfDps; i++) {
            yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
            chart.options.data[0].dataPoints.push({x: xVal, y: yVal});
            xVal++;
        }
    }
}