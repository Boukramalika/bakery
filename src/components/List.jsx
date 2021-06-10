import React from 'react';
class Liste extends React.Component{
    constructor () {
        super()
        this.state={}
    }
    render (){
        return (
            <div>
                List
                {this.props.items}
                <ul>
                    
                </ul>
            </div>
        )
    }
}
export default Liste