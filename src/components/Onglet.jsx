
import React from 'react';
import { Button } from 'react-bootstrap';

class Onglet extends React.Component{
    constructor () {
        super()
        this.state={}
    }
    render (){
        return (
            
              <Button
              variant="outline-dark"
              OnClick=  {this.props.OnClick}
              >
              {this.props.children}
              </Button>


        
        )
           
           
    }
}
export default Onglet