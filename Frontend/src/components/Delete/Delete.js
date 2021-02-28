import React, {Component} from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import axios from 'axios';

class Delete extends Component{
   
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            id : "",
         
        }
        //Bind the handlers to this class
        this.idChangeHandler = this.idChangeHandler.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }


    idChangeHandler = (e) => {
        this.setState({
            id : e.target.value
        })
    }

   
   
  
    deleteBook=(e)=>{
        e.preventDefault();

        console.log("inside Delete submit function")
        const data1 = {
            BookID : this.state.id,
        }
        console.log("data",data1)
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/delete',data1)
        .then(response => {
            console.log(response.data)
            if(response.data=="Deleted"){
                let redirectVar = null;
                redirectVar=<Redirect to= "/home"/>
                window.location.reload()

            }
            else if(response.data=="Not"){
                alert("ID Does Not Exist")
            }

            });

   

   }
   
   
    render(){
        let redirectVar = null;
        if(cookie.load('cookie')!=="admin"){
            redirectVar = <Redirect to= "/login"/>
        }
        return(
            <div>
                   {redirectVar}
            <div class="container">
                <form>
                    <div style={{width: "50%",float: "left"}} class="form-group">
                        <input  type="text" class="form-control"  onChange = {this.idChangeHandler}  name="BookID" placeholder="Search a Book by Book ID"/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button class="btn btn-success" onClick = {this.deleteBook} name ="Submit"type="submit">Delete</button>
                    </div> 
                </form>
            </div>
            </div>
        )
    }
}

export default Delete;