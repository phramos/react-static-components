var React = require('react');

var ColorCard = React.createClass({

    render: function() {

        var divStyle = {
            "marginTop": "20px"
        };

        var valueStyle = {
            "fontWeight": "bolder",
            "color": "white"
        };

        var textStyle = {
            "color": "white"
        };

        if (this.props.headingColor) {
            var headingStyle = {
              "background": this.props.headingColor
            }
        }else {
            var headingStyle = {
              "background": "#8B008B"
            }
        }

        return(
            <div style={divStyle} className="panel panel-default">
                <div style={headingStyle} className="panel-heading">
                    <h4 style={textStyle}>{this.props.title}</h4>
                    <h2 style={valueStyle}>{this.props.value}</h2>
                </div>
                <div className="panel-body">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }

});

module.exports = ColorCard;