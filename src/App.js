import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import Main from './components/main';
import {Grid, Cell} from 'react-mdl';
import 'font-awesome/css/font-awesome.min.css'

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540,
  smobile: 480,
  sxmobile: 240,
};

class App extends Component {
  render() {
    if(window.innerWidth > breakpoints.tablet){
      return (
        <div style={{height: '1200px', position: 'relative'}}>
      <Layout fixedHeader >
      <Header style={{backgroundColor:'black'}}>
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="demo-grid-ruler">
            <Cell col={4} style={{textAlign:"end"}}><span style={{ color: 'white', fontSize: 22}}>white</span><strong><span style={{ color: 'white', fontSize: 22}}>panda</span></strong> </Cell>
            <Cell col={1}></Cell>
            <Cell col={1}></Cell>
            <Cell col={1} style={{alignContent:'center'}}><span style={{border:'3px solid #bdc3c7',verticalAlign: '-webkit-baseline-middle', borderRadius: '50%', padding: "4px 9px"}}>&#8377;</span></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-bell" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-user" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px 7px"}}></i></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-shopping-cart" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></Cell>
            <Cell col={1}></Cell>
            <Cell col={1}></Cell>
          </Grid>
        </div>
      </Header>
      <Content>
        <div className="page-content"/>
        <Main/>
      </Content>
      </Layout>
  </div>
  
      );
    }
    else if (window.innerWidth > breakpoints.mobile) {
      // do stuff for tablet
      return (
        <div style={{height: '1200px', position: 'relative'}}>
      <Layout fixedHeader>
      <Header style={{backgroundColor:'black'}}>
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="demo-grid-ruler">
            <Cell col={2} style={{textAlign:"end"}}><span style={{ color: 'white', fontSize: 22}}>white</span><strong><span style={{ color: 'white', fontSize: 22}}>panda</span></strong> </Cell>
            <Cell col={1}></Cell>
            <Cell col={1}></Cell>
            <Cell col={1} style={{alignContent:'center'}}><span style={{border:'3px solid #bdc3c7',verticalAlign: '-webkit-baseline-middle', borderRadius: '50%', padding: "4px 9px"}}>&#8377;</span></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-bell" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-user" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px 7px"}}></i></Cell>
            <Cell col={1} style={{justifyContent: 'center'}} ><i class="fa fa-shopping-cart" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></Cell>
          </Grid>
        </div>
      </Header>
      <Content>
        <div className="page-content"/>
        <Main/>
      </Content>
      </Layout>
  </div>
  
      );
      
    }
    else if (window.innerWidth > breakpoints.sxmobile) {
      // do stuff for tablet
      return (
        <div style={{height: '1200px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header style={{backgroundColor:'black'}}>
        <Grid className="demo-grid-ruler">
            <Cell col={10} style={{textAlign:"end"}}><span style={{ color: 'white', fontSize: 22}}>white</span><strong><span style={{ color: 'white', fontSize: 22}}>panda</span></strong> </Cell>
        </Grid>
        </Header>
        <Drawer style={{width:"100px", backgroundColor:"black"}}>
            <Navigation>
                <a href="#"><span style={{border:'3px solid #bdc3c7',verticalAlign: '-webkit-baseline-middle', borderRadius: '50%', padding: "4px 9px"}}>&#8377;</span></a>
                <a href="#"><i class="fa fa-bell" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></a>
                <a href="#"><i class="fa fa-user" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px 7px"}}></i></a>
                <a href="#"><i class="fa fa-shopping-cart" style={{color: 'white', border:'3px solid #bdc3c7', borderRadius: '50%', padding: "5px"}}></i></a>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
        <Main/>
      </Content>
    </Layout>
</div>
  
      );
      
    }
  } 
}

export default App;
      