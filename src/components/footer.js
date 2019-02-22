import React from 'react';
import { Grid, Cell} from 'react-mdl';



const Footer = () => {
  return (
    <div style={{backgroundColor: '#253031'}}>
      <Grid className="demo-grid-1">
        <Cell col={6}><p style={{ color : '#FFFFFF'}}>Build with <img width="25" src="react.svg" alt="description dfffof "/></p></Cell>
        <Cell className="footer-styling" col={6}> <p style={{ color : '#FFFFFF'}}> &copy; Copyright 2019 Sanidhya Keluskar </p></Cell>
    </Grid>
    </div>
  );
}

export default Footer;