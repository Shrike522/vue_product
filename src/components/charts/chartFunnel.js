//标准漏斗图
import img from '../../assets/chartImages/chartFunnel.png';

let option = {
  title : {
    text: '漏斗图',
    subtext: '纯属虚构'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  legend: {
    data : ['展现','点击','访问','咨询','订单']
  },
  calculable : true,
  series : [
    {
      name:'漏斗图',
      type:'funnel',
      width: '40%',
      data:[
        {value:60, name:'访问'},
        {value:40, name:'咨询'},
        {value:20, name:'订单'},
        {value:80, name:'点击'},
        {value:100, name:'展现'}
      ]
    },
    {
      name:'金字塔',
      type:'funnel',
      x : '50%',
      sort : 'ascending',
      itemStyle: {
        normal: {
          // color: 各异,
          label: {
            position: 'left'
          }
        }
      },
      data:[
        {value:60, name:'访问'},
        {value:40, name:'咨询'},
        {value:20, name:'订单'},
        {value:80, name:'点击'},
        {value:100, name:'展现'}
      ]
    }
  ]
};

let chartData = {
  chartName:"chartFunnel",
  name:"标准漏斗图",
  option,
  img,
};

export default chartData;
