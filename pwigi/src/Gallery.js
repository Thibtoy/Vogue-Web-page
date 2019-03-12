import React from 'react';
import Box from './Box';
import $ from 'jquery';

export default class Gallery extends React.Component {
    
    constructor(){ 
    super();
    this.state = {
        products : []

      }
    }
// First stage of the lifecycle
    componentWillMount() {
        let that = this;
        $.get('http://localhost:3000/', function(data){
            let articles = data.map(function(pro, i) {
                return (
                    <Box key={i} item={pro}></Box>
                )
                

        })
        that.setState({products: articles});
    })
}
// Second stage of the lifecycle
    render () {
        return (
            <div id="Gallery">
            {this.state.products}
            </div>
            
        )
    }
}