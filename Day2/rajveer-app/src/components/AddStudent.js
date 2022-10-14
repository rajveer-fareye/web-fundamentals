import React, {Component} from "react";
import Drawer from './Drawer';
// import { Button} from "antd";

class AddStudent extends Component{
    render(){
        
        return (
            <>
            {/* <Button type="primary" >New account</Button> */}
            <Drawer/>
            </>
            
        )

    }
}

export default AddStudent;