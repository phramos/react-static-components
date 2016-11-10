var React = require('react');

var SimpleCard = React.createClass({

    render: function() {

        var divStyle = {
            "marginTop": "20px"
        };

        var valueStyle = {
            "fontWeight": "bolder",
            "color": "#515151"
        };

        var textStyle = {
            "color": "lightgray"
        };


        return(
            <div style={divStyle} className="panel panel-default">
                <div className="panel-body">
                    <h2 style={valueStyle}>{this.props.value}</h2>
                    <h4 style={textStyle}>{this.props.text}</h4>
                </div>
            </div>
        );
    }

});

module.exports = SimpleCard;