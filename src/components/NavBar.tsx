import * as React from 'react';
import {Menu, Icon, Dropdown, Button} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
  <Menu theme='dark'>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default class NavBar extends React.Component {
  // state = {
  //   current: 'mail',
  // }
  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // }



  render() {
    let dropdownOverlay = (
      <Menu theme='dark'>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <Menu theme='dark' mode="horizontal">
        <Menu.Item key="mail" >
          <Icon type="mail" /> Navigation One
          </Menu.Item>
        <Menu.Item key="app" disabled={true} >
          <Icon type="appstore" /> Navigation Two
              </Menu.Item>
        <Menu.Item>
          <Dropdown trigger={['click']} overlay={dropdownOverlay}>
            <a>
              Button <Icon type="down" />
            </a>
          </Dropdown>
        </Menu.Item>
        <SubMenu
          title={<span > <Icon type="setting" /> Navigation Three - Submenu </span>}>
          <MenuItemGroup title="Item 1" >
            <Menu.Item key="setting:1" > Option 1 </Menu.Item>
            <Menu.Item key="setting:2" > Option 2 </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2" >
            <Menu.Item key="setting:3" > Option 3 </Menu.Item>
            <Menu.Item key="setting:4" > Option 4 </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" >
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer" > Navigation Four - Link </a>
        </Menu.Item>
      </Menu>
    );
  }
}
