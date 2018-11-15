import React,{Component} from "react";

export default class ListItem extends Component{
  render(){
    return(
      <li tabindex="3" className="listItem"
          onClick={() => this.props.handleListItemClick(this.props)}>
        {this.props.name}
      </li>
    )
  }
}
