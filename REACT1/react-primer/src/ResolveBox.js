import React, { Component } from 'react';
import {AddBox} from  "./addBox";

export class SelectBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { mac:""};
        this.MacOrAv = this.MacOrAv.bind(this);
    }
    render()
    {
        return (
            <div>
                
                <AddBox zivotinja={this.state.mac}/>
                <select ref={this.state.mac} onChange={this.MacOrAv}>
                    <option value="kuce">Kuce</option>
                    <option value="mace">Mace</option>
                </select>
               <picture>
                    <img src="./picture/download.png"/>
                 </picture>
                
            </div>
        );
    }
    MacOrAv(e)
    {
       
        if(e.target.value == "kuce")
        {
            this.setState( {mac :"kuce"});
            alert("avavaav");
        }
        else{
            this.setState( {mac :"macka"});
            alert("meow");
        }
        console.log(this.state.mac);
    }
}
