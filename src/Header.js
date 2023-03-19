import React  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header(){
   return(<>    
   <Navbar bg="dark" variant="dark">
           <Container>
             <Navbar.Brand href="#home">To DO</Navbar.Brand>
             <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
               <form onSubmit={handleLogin} >
               <input type="text" placeholder="username" name="username"></input>
               <input type="password" placeholder="password" name="password"></input>
               <button className="btn1" type="submit"  >Login</button>
              </form> 
              <h5 id="head"> not a user !? signup here </h5>
              <form  >
               <input type="text" placeholder="username" name="username"></input>
               <input type="password" placeholder="password" name="password"></input>
              <button className="btn1" type ="submit" href="register" >signup</button>
             
              </form>
             </Nav>
           </Container>
         </Navbar>   
   </>)
 } 