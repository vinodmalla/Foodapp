import react from "react";
class Userclass extends react.Component{
    constructor(props){
        super(props);
        this.state={
            count:1

        };
        
    }
    componentDidMount(){
   
    }
    render(){
        const {name}=this.props;
     
     
        return(
            <>
            <h1>Vinod {name}</h1>
            <h1> count-{this.state.count}</h1>
            <p>Frontend Developer</p>
            </>
            
        )
    }

}
export default Userclass;