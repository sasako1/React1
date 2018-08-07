import React, { Component } from 'react';
import {Macka} from "./mackaKalup";
import {Kuce} from "./kuceKalup";
import {ServiceZivotinja} from "./serviceMacka";

export class AddBox extends Component
{
    constructor(props)
    {
        super(props);
        this.rasa="";
        this.boja ="";
        this.NovaZivotinja ={};
        this.DugmePritisnuto = this.DugmePritisnuto.bind(this); // za svaki funkciju(handelr ) se ovo pise kako bi mogo u handelr da se koristi this
        this.PromenaInputaBoje = this.PromenaInputaBoje.bind(this);
        this.PromenaInputaRase = this.PromenaInputaRase.bind(this);
        this.Service = new ServiceZivotinja();

    }
    DugmePritisnuto()
    {
        console.log(this.props);
        if(this.props.zivotinja == true)
        {
            this.NovaZivotinja = new Kuce(this.boja,this.rasa);
        }
        else{
            this.NovaZivotinja = new Macka(this.boja,this.rasa);
           
        }
        console.log(this.NovaZivotinja);
    }
    

    PromenaInputaRase(e)
    {
        this.rasa = e.target.value;
        console.log(`${this.rasa} ovo je rasa`);
    }
    PromenaInputaBoje(e)
    {
        this.boja = e.target.value;
        console.log(`${this.boja} ovo je boja`);
    }
    render()
    {
        
        let rasa= "rasa"; // primer samo da vidis da postoji
        return (
             <div>
               <input placeholder={rasa} onChange={this.PromenaInputaRase} /> 
                <input placeholder="boja"  onChange={this.PromenaInputaBoje}/>
                <br/>
                <button onClick={this.DugmePritisnuto}>Find</button>

            </div>
        );

    }
} 