var React = require('react');

var SimpleLabel = React.createClass({

    render: function () {

        var valueStyle = {
            "fontWeight": "bolder",
            "color": "white",
            "textAlign": "center"
        };

        var textStyle = {
            "fontWeight": "bolder",
            "color": "#AAACAC",
            "textAlign": "center"
        };

        return(
          <div>
              <h2 style={valueStyle}>{this.props.value}</h2>
              <h4 style={textStyle}>{this.props.text}</h4>
          </div>
        );
    }

});

module.exports = SimpleLabel;