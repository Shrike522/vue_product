import chartBar from './chartBar';
import chartBarDiagram from './chartBarDiagram';
import chartBarDiagraMultiple from './chartBarDiagraMultiple';
import chartLine from './chartLine';
import chartLineMultiple from './chartLineMultiple';
import chartPie from './chartPie';
import chartPieBight from './chartPieBight';
import chartPieRose from './chartPieRose';
import chartGauge from './chartGauge';
import chartFunnel from './chartFunnel';
import chartBarMultiple from './chartBarMultiple';
import chartRadar from './chartRadar';
import chartChinaMap from './chartChinaMap';


const charts = {
  chartBar:{chart:chartBar,name:"标准柱状图"},
  chartBarMultiple:{chart:chartBarMultiple,name:"堆积柱状图"},
  chartBarDiagram:{chart:chartBarDiagram,name:"标准条形图"},
  chartBarDiagraMultiple:{chart:chartBarDiagraMultiple,name:"堆积条形图"},
  chartLine:{chart:chartLine,name:"标准折线图"},
  chartLineMultiple:{chart:chartLineMultiple,name:"堆积折线图"},
  chartPie:{chart:chartPie,name:"标准饼图"},
  chartPieBight:{chart:chartPieBight,name:"标准环形图"},
  chartPieRose:{chart:chartPieRose,name:"南丁格尔玫瑰图"},
  chartGauge:{chart:chartGauge,name:"标准仪表盘"},
  chartFunnel:{chart:chartFunnel,name:"标准漏斗图"},
  chartRadar:{chart:chartRadar,name:"标准雷达图"},
  chartChinaMap:{chart:chartChinaMap,name:"标准中国地图"},
};

export default charts;
