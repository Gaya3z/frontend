import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './item.css'
import arrowRight from '.../../../public/arrowRight.svg'
import arrowLeft from '.../../../public/arrowLeft.svg'
import {SubjectScroll, Subtext} from './SubElements'

// list of items
export const list = [
  { name: 'Data Science'},
  { name: 'Business'},
  { name: 'Humanities'},
  { name: 'Art and Design'},
  { name: 'Programming'},
  { name: 'Personal Development'},
  { name: 'Health & Nutrition'},
  { name: 'Language Learning'},
  { name: 'Computer Science'},
  { name: 'Information Technology'},
  { name: 'Social Science'},
  { name: 'Physical Science & Engineering' },
  { name: 'Education & Teaching'}
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ' '}`} >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const selected = 'Data Science';

export default class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {selected};

  onSelect = key => { this.setState({ selected: key }); }

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <SubjectScroll>
        <div className="item" >
        <ScrollMenu
          data={menu}
          arrowLeft={<div style={{ width : "24px" , height : "24px" }}><img src = { arrowLeft } alt = "<" /></div>}
          arrowRight={<div style={{ width : "24px" , height : "24px" }}><img src = { arrowRight } alt = ">" /></div>}
          selected={selected}
          onSelect={this.onSelect}
          wheel={false}
          alignCenter={false}
          scrollBy = {1}
          alignOnResize = {false}
        />
        <div>
        <div onChange={this.setSelected}>
          <Subtext>
              {selected}   
          </Subtext>
          </div> 
        </div>
      </div>
      </SubjectScroll>
      
    );
  }
}