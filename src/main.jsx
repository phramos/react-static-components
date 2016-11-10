var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SimpleCard = require('./components/SimpleCard.jsx');
var ColorCard = require('./components/ColorCard.jsx');
var ColoredPanel = require('./components/ColoredPanel.jsx');

ReactDOM.render(<SimpleCard text="new followers added this month" value="20"/>, document.getElementById('simple-card1'));
ReactDOM.render(<SimpleCard text="Average Monthly Income" value="$ 1250"/>, document.getElementById('simple-card2'));
ReactDOM.render(<SimpleCard text="Yearly Income Goal" value="$ 13865"/>, document.getElementById('simple-card3'));

ReactDOM.render(<ColorCard title="New visitors" value="1.5k" text="wooow, thats a significant amount"/>, document.getElementById('color-card1'));
ReactDOM.render(<ColorCard title="Bounce Rate" value="50%" text="wooow, thats a significant amount" headingColor="darkblue"/>, document.getElementById('color-card2'));
ReactDOM.render(<ColorCard title="Searchs" value="28%" text="wooow, thats a significant amount" headingColor="darkred"/>, document.getElementById('color-card3'));
ReactDOM.render(<ColorCard title="Traffic" value="140.5kb" text="wooow, thats a significant amount" headingColor="darkgreen"/>, document.getElementById('color-card4'));


ReactDOM.render(<ColoredPanel bodyColor="#0096D0" shotViews="15080" likes="12000" comments="5100" />, document.getElementById('colored-panel1'));