<template>
    <div class="chart">
        <canvas ref="chart" width="300" height="300"></canvas>
    </div>
</template>

<script>
// import Chart from 'chart.js/auto';
import {Chart, LinearScale, LineController, CategoryScale, PointElement, LineElement, Filler, Tooltip} from "chart.js";

Chart.register(LinearScale, LineController, CategoryScale, PointElement, LineElement, Filler, Tooltip);

export default {
    props: ['chartData', 'period'],

    data() {
        return {
            chart: null,
        }
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IF PERIOD CHANGES = CHANGE PERIOD DATA
        period() {
            this.getData();
            this.setLabels();
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET CHART DATA
        getData() {
            this.chart.data.datasets.forEach((dataset) => {
                dataset.data = this.chartData;
            });

            this.chart.update();
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SET LABELS
        setLabels() {
            let labels = [];
            
            if (this.period.toLowerCase() === 'week') {
                labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                if (window.outerWidth < 850) {
                    labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                }
            }
            
            if (this.period.toLowerCase() === 'month') {
                labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            }
            
            if (this.period.toLowerCase() === 'year') {
                labels = ['January', 'March', 'May', 'July', 'September', 'November'];
                if (window.outerWidth < 850) {
                    labels = ['Jan', 'Mar', 'May', 'July', 'Sep', 'Nov'];
                }
            }
            
            if (this.period.toLowerCase() === 'all time') {
                labels = ['January', 'March', 'May', 'July', 'September', 'November'];
                if (window.outerWidth < 850) {
                    labels = ['Jan', 'Mar', 'May', 'July', 'Sep', 'Nov'];
                }
            }
        
            this.chart.data.labels = labels;

            this.chart.update();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // INITIALIZE CHART
        initChart() {
            const ctx = this.$refs.chart.getContext('2d');
            const borderGradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
            borderGradient.addColorStop(0, 'rgba(75, 54, 218, 1)');
            borderGradient.addColorStop(1, 'rgba(70, 41, 255, 1)');

            const fillGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            fillGradient.addColorStop(0, 'rgba(70, 41, 255, 0.12)');
            fillGradient.addColorStop(1, 'rgba(75, 54, 218, 0.05)');
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        data: [],
                        borderColor: borderGradient,
                        backgroundColor: fillGradient,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointStyle: 'circle',
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#3751FF',
                        pointHoverRadius: 5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    elements: {
                        point: {
                            radius: 0,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                maxTicksLimit: 10,
                                padding: 4,
                                color: '#9FA2B4',
                                font: {
                                    family: 'Montserrat'
                                }
                            },
                            grid: {
                                drawBorder: false,
                                color: '#2E3035',
                                drawTicks: false,
                                lineWidth: 1,
                                offset: true,
                            },
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                padding: 10,
                                color: 'white',
                                font: {
                                    size: 12,
                                    family: 'Montserrat'
                                },
                            },
                        },
                    },
                    plugins: {
                        tooltip: {
                            titleFont: {
                                size: 0,
                                family: 'Montserrat'
                            },
                            bodyFont: {
                                size: 14,
                                family: 'Montserrat',
                                weight: '600',
                            },
                            backgroundColor: '#ffffff',
                            titileColor: '#000000',
                            bodyColor: '#000000',
                            titleMarginBottom: 0,
                            multiKeyBackground: "#ffffff",
                            xAlign: 'center',
                            yAlign: 'bottom',
                            padding: 10,
                            caretPadding: 8,
                            displayColors: false,
                        },
                    }
                },
                plugins: [{
                    beforeDraw: chart => {
                        if (chart.tooltip?._active?.length) {
                            const ctx = chart.ctx;
                            const activePoint = chart.tooltip._active[0];

                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(activePoint.element.x, chart.chartArea.bottom);
                            ctx.lineTo(activePoint.element.x, activePoint.element.y);
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = 'white';
                            ctx.stroke();
                            ctx.restore();  
                        }
                    },
                }]
            });
        },
    },

    mounted () {
        // SET INIAL DATA
        this.initChart();
        this.getData();
        this.setLabels();

        // RESIZE
        window.addEventListener('resize', () => {
            this.chart.resize();
        });
    },
}
</script>

<style lang="scss" scoped>
.chart {
    width: 95%;
    height: 40rem;
    margin: 0 auto;
    position: relative;
    flex: 1 1 auto;

    @media only screen and (max-width: 850px) {
        width: 105%;
        height: 43rem;
        margin-left: -2.5%;
    }
}
</style>