import * as React from 'react';

import {Layout, Card} from 'antd';
const {Header, Content, Sider} = Layout;
import SplitPane from 'react-split-pane';
import NavBar from './components/NavBar';
import TestTree from './TestTree';

import './components/Block.css';


export const App = () => {
  return (
    <div style={{height: '100%'}}>
      <NavBar>

      </NavBar>
      <SplitPane minSize={50} defaultSize={100} style={{top: '40px', height: 'calc( 100% -40px)'}}>
        <div>
          <TestTree />
        </div>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <div className='tclo-block' style={{top: 50, left: 50, width: 150}} >
            <div className='tclo-block-head' />
            <div className='tclo-block-body' >
              <div className='tclo-block-row' />
              <div className='tclo-block-row' />
              <div className='tclo-block-row' />
              <div className='tclo-block-row' />
            </div>
            <div className='tclo-block-foot' />
          </div>

        </div>
      </SplitPane>
    </div >
  );
};
