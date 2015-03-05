'use strict'

var React  = require('react')
var assign = require('object-assign')
var Loader = require('./Loader')

module.exports = React.createClass({

    displayName: 'LoadMask',

    getDefaultProps: function(){

        return {
            visible: false,
            visibleDisplayValue: 'block',
            defaultStyle: {
                position: 'absolute',
                width   : '100%',
                height  : '100%',
                display : 'none',
                top: 0,
                left: 0
            }
        }
    },

    render: function(){
        var props = assign({}, this.props)

        props.style = this.prepareStyle(props)

        props.className = props.className || ''
        props.className += ' loadmask'

        return <div {...props}>
            <Loader size={props.size}/>
        </div>
    },

    prepareStyle: function(props){

        var style = assign({}, props.defaultStyle, props.style)

        style.display = props.visible?
                        props.visibleDisplayValue:
                        'none'

        return style
    }
})