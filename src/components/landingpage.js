import React, {Component} from 'react';
import {Grid, Cell, Layout, Card, CardActions, CardTitle, Button, CardText, CardMenu, IconButton} from 'react-mdl';


const breakpoints = {
    desktop: 1024,
    tablet: 840,
    mobile: 540,
    smobile: 480,
    sxmobile: 240,
  };

class Landing extends Component
{
    render()
    {
        if(window.innerWidth > breakpoints.desktop)
        {
        return(
               
                <div className="container" style={{width: '100%', marginTop: "50px"}} >               
                    <Grid>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                     <CardTitle  style={{color: '#fff' }}><i className="fa fa-list-alt" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Blog Post</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>White Paper</strong>
                                        <br/>
                                        2500 - 3000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Website Content</strong>
                                        <br/>
                                        250 - 350 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-print" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Press Release</strong>
                                        <br/>
                                        350 - 450 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-text" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Product Description</strong>
                                        <br/>
                                        150 - 200 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-tablet" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Social Media</strong>
                                        <br/>
                                        30 - 35 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-book" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Book/Story Writing</strong>
                                        <br/>
                                        500 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-film" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Video Script</strong>
                                        <br/>
                                        1000 - 4000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-clipboard" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Newsletter</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Brochure Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-wrench" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Custom Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-trophy"style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Contest</strong>
                                        <br/>
                                        10 - 20 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={6}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-bookmark" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order from Template</strong>
                                        <br/>
                                        You can give an order from templates
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={6}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-excel-o" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order via Spreadsheets</strong>
                                        <br/>
                                        It is useful when giving Bulk Orders
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
            </div>  
              
        );
        }
        if(window.innerWidth > breakpoints.tablet)
        {
        return(
               
                <div className="container" style={{width: '100%', marginTop: "50px"}} >               
                    <Grid>
                        <Cell col={2}></Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                     <CardTitle  style={{color: '#fff' }}><i className="fa fa-list-alt" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Blog Post</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>White Paper</strong>
                                        <br/>
                                        2500 - 3000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Website Content</strong>
                                        <br/>
                                        250 - 350 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-print" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Press Release</strong>
                                        <br/>
                                        350 - 450 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-text" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Product Description</strong>
                                        <br/>
                                        150 - 200 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-tablet" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Social Media</strong>
                                        <br/>
                                        30 - 35 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-book" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Book/Story Writing</strong>
                                        <br/>
                                        500 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-film" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Video Script</strong>
                                        <br/>
                                        1000 - 4000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-clipboard" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Newsletter</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Brochure Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-wrench" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Custom Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={3}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-trophy"style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Contest</strong>
                                        <br/>
                                        10 - 20 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>         
                    </Grid>
                    <Grid>
                    <Cell col={2}></Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-bookmark" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order from Template</strong>
                                        <br/>
                                        You can give an order from templates
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={5}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-excel-o" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order via Spreadsheets</strong>
                                        <br/>
                                        It is useful when giving Bulk Orders
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
            </div>  
              
        );
        }
        if(window.innerWidth > breakpoints.sxmobile){
            return(
               
                <div className="container" style={{width: '100%',marginTop: "50px"}} >               
                    <Grid>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                     <CardTitle  style={{color: '#fff' }}><i className="fa fa-list-alt" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Blog Post</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>White Paper</strong>
                                        <br/>
                                        2500 - 3000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Website Content</strong>
                                        <br/>
                                        250 - 350 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-print" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Press Release</strong>
                                        <br/>
                                        350 - 450 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-text" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Product Description</strong>
                                        <br/>
                                        150 - 200 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-tablet" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Social Media</strong>
                                        <br/>
                                        30 - 35 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-book" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Book/Story Writing</strong>
                                        <br/>
                                        500 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-film" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Video Script</strong>
                                        <br/>
                                        1000 - 4000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-clipboard" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Newsletter</strong>
                                        <br/>
                                        400 - 500 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-laptop" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Brochure Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-wrench" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Custom Content</strong>
                                        <br/>
                                        850 - 1000 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-trophy"style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Contest</strong>
                                        <br/>
                                        10 - 20 Words
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-bookmark" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order from Template</strong>
                                        <br/>
                                        You can give an order from templates
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="content">
                                <Card shadow={5} style={{width: '100%', textAlign: 'center', alignItems: 'center', borderRadius: "5px"}}>
                                    <CardTitle  style={{color: '#fff' }}><i className="fa fa-file-excel-o" style={{backgroundColor:"#bdc3c7", borderRadius: "50%", padding: "6px 12px", marginTop: "10px"}}></i></CardTitle>
                                    <CardText>
                                        <strong>Order via Spreadsheets</strong>
                                        <br/>
                                        It is useful when giving Bulk Orders
                                    </CardText>
                                    <CardActions>
                                    <Button raised={true} style={{backgroundColor: 'green'}}><span style={{color: 'white'}}>Order</span></Button>   
                                    </CardActions>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
            </div>  
              
        );
        }
    }
}

export default Landing;



