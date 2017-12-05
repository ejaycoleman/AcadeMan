import React, { Component } from 'react';
import './App.css';

import Module from './module';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Avatar } from 'antd';

class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "module1",
    }

     this.selectModule = this.selectModule.bind(this);

  }

  selectModule(e) {
    this.setState({currentView: e.target.getAttribute('name')})
  }

  render() {
    return (
      <div className="App">
        <div style={{height: '100vh', position: 'relative'}}>
          <Layout fixedHeader fixedDrawer>
              <Header title="Brunel University London">
                  <Avatar style={{ color: '#FAFAFA', backgroundColor: '#D81B60' }}>EC</Avatar>
              </Header>
              <Drawer title="Modules">
                  <Navigation>
                      <a onClick={this.selectModule} name="module1">Module 1</a>
                      <a onClick={this.selectModule} name="module2">Module 2</a>
                      <a onClick={this.selectModule} name="module3">Module 3</a>
                      <a onClick={this.selectModule} name="module4">Module 4</a>
                  </Navigation>
              </Drawer>
              <Content>
                <Module display={this.state.currentView}/>
              </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Frame;
