//标准条形图
import img from '../../assets/chartImages/chartBarDiagram.png';

let option = {
  title : {
    text: '世界人口总量',
    subtext: '数据来自网络'
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['2011年', '2012年']
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  xAxis : [
    {
      type : 'value',
      boundaryGap : [0, 0.01]
    }
  ],
  yAxis : [
    {
      type : 'category',
      data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
    }
  ],
  series : [
    {
      name:'2011年',
      type:'bar',
      data:[18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name:'2012年',
      type:'bar',
      data:[19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};

let chartData = {
  chartName:"chartBarDiagram",
  name:"标准条形图",
  option,
  img,
};

export default chartData;
