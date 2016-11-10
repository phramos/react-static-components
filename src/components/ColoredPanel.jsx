var React = require('react');

var SimpleLabel = require('./SimpleLabel.jsx');

var ColoredPanel = React.createClass({

    render: function() {

        var panelStyle = {
            "border": "none"
        };

        var bodyStyle = {
            "minHeight": "200px",
        };

        var footerStyle = {
            "background": "#484D4D"
        };

        bodyStyle = {
            "minHeight": "200px",
            "background": this.props.bodyColor
        };

        return(
            <div style={panelStyle} className="panel container-fluid">
                <div style={bodyStyle} className="panel-body row">
                    {this.props.panelContent}
                </div>
                <div style={footerStyle} className="panel-footer row">
                        <div className="col-sm-4">
                            <SimpleLabel value={this.props.shotViews} text="Shot Views"/>
                        </div>
                        <div className="col-sm-4">
                            <SimpleLabel value={this.props.likes} text="Likes"/>
                        </div>
                        <div className="col-sm-4">
                            <SimpleLabel value={this.props.comments} text="Comments"/>
                        </div>
                </div>
            </div>
        );
    }

});

module.exports = ColoredPanel;