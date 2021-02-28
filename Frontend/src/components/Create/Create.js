import React, {Component} from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import axios from 'axios';
import '../../App.css';


class Create extends Component{
   
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            id : "",
            title : "",
            author : "",
            books : [],
         
            // idError:"",
            // titleError:"",
            //authorError:""
           
        }
        //Bind the handlers to this class
        this.idChangeHandler = this.idChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.authorChangeHandler=this.authorChangeHandler.bind(this);
        this.createBook = this.createBook.bind(this);
        this.findId=this.findId.bind(this);
       
    }

     //get the books data from backend  
     componentDidMount=()=>{
        axios.get('http://localhost:3001/home')
                .then((response) => {
                //update the state with the response data
                this.setState({
                    books : this.state.books.concat(response.data) 
                });
            });
    }

    // change handlers to update state variable with the text entered by the user
    idChangeHandler = (e) => {
        this.setState({
            id : e.target.value
        })
    }
    titleChangeHandler = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    authorChangeHandler = (e) => {
        this.setState({
            author : e.target.value
        })
    }

   
    findId = (bookArray, ID) => {
        for(let i=0; i < bookArray.length; i++){
            console.log(bookArray[i].BookID,ID)
            if(bookArray[i].BookID == ID){
                console.log('here')
                return 1;
            }
        }
        return -1;
    }

    createBook=(e)=>{
        e.preventDefault();
        const data = {
            BookID : this.state.id,
            Title : this.state.title,
            Author : this.state.author,
        }
    
        if(this.findId(this.state.books,data.BookID)==1){
            alert("BookId Already Exist");

        }
        else{
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/create',data)
            .then(response => {
                console.log(response.data)
                
                if(response.data=="Sucessful"){
                    let redirectVar1 = null;
                    redirectVar1=<Redirect to= "/home"/>
                    window.location.reload()
    
                }
        });
    }
}
    render(){
        let redirectVar = null;
        let redirectVar1 = null;
        if(cookie.load('cookie')!=="admin"){
            redirectVar = <Redirect to= "/login"/>
        }
        return(
            <div>
                    {redirectVar}
                    {redirectVar1}
                <br/>
                <div class="container">
          
                    <form action="http://127.0.0.1:3000/create" method="post">
                        <div style={{width: '30%'}} class="form-group">
                            <input  type="text" onChange = {this.idChangeHandler} pattern ="[0-9]{1,5}" class="form-control" name="BookID" placeholder="Book ID" required />
                        <div style={{color:"red"}}>{this.state.idError}</div>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" onChange = {this.titleChangeHandler}  class="form-control" name="Title" placeholder="Book Title"required />
                        </div>
                        <div style={{color:"red"}}>{this.state.titleError}</div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" onChange = {this.authorChangeHandler}  class="form-control" name="Author" placeholder="Book Author"required />
                        </div>
                     
                        <br/>
                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" onClick = {this.createBook}  type="submit">Create</button>
                        </div>
                       
                    </form>
                 
                </div>
            </div>
        )
    }
}

export default Create;