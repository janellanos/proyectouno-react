import './App.css';
import React ,{ Component } from 'react';
import { ProvinciaService } from './service/ProvinciaService';




export default class App extends Component {
  constructor() {
  super();
  this.state={};
  this.ProvinciaService= new ProvinciaService();
 }
  
  componentDidMount() {
  this.ProvinciaService.getAll().then(data=>{  
    console.log(data);
   }  );
  
  }
  render( ){  
  return( 
<p> :   voy a llorar</p>
   


  
    );
  
  }

  }

  