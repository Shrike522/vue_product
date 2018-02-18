//标准仪表盘
import img from '../../assets/chartImages/chartGauge.png';

let option = {
  tooltip : {
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  series : [
    {
      name:'业务指标',
      type:'gauge',
      detail : {formatter:'{value}%'},
      data:[{value: 50, name: '完成率'}]
    }
  ]
};

// clearInterval(timeTicket);
// timeTicket = setInterval(function (){
//   option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//   myChart.setOption(option, true);
// },2000);

let chartData = {
  chartName:"chartGauge",
  name:"标准仪表盘",
  option,
  img,
};

export default chartData;
