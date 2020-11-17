import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import {
  Typography,
} from '@material-ui/core';
import { colors } from '../../theme'

const styles = theme => ({
  footer: {
    padding: '48px',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    background: '#2C3040',
    borderTop: '1px solid rgba(59, 66, 86 , 0.9)',
    flexWrap: 'wrap',
    borderTop: '1px solid '+colors.borderBlue,
    marginTop: '80px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderBlue,
    width: 'fit-content',
  },
  link: {
    paddingBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    fill: 'rgba(59, 66, 86 , 0.9)',
    marginRight: '6px'
  },
  yearnIcon: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  builtWith:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  builtWithLink: {
    paddingTop: '12px'
  },
  builtHeading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderBlue,
    width: 'fit-content',
  },
  products: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  community: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  socials: {
    padding: '0px 24px'
  }
});

class Footer extends Component {

  constructor(props) {
    super()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
      <div className={ classes.products }>
        <Typography className={ classes.heading } variant={ 'h6'}>Documentation</Typography>
        <div  className={ classes.link } onClick={()=> window.open("/pre-sale")} >
          <DescriptionIcon height='15px' className={ classes.icon } />
          <Typography variant={ 'h4'} >Pre Sales <span role='img' description='fire' aria-label='pre-sale' aria-labelledby='kp2r'> 🔥</span></Typography>
        </div>
        <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/", "_blank")} >
          <DescriptionIcon height='15px' className={ classes.icon } />
          <Typography variant={ 'h4'} >Docs</Typography>
        </div>
        <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/registry", "_blank")} >
          <DescriptionIcon height='15px' className={ classes.icon } />
          <Typography variant={ 'h4'} >Registry</Typography>
        </div>
      </div>
      <div className={ classes.products }>
        <Typography className={ classes.heading } variant={ 'h6'}>Social Media</Typography>
        <div  className={ classes.link } >
          <img alt="kp2r" src={ require('../../assets/twitter.svg') } height='36px' onClick={()=> window.open("https://twitter.com/kp2rnetwork", "_blank")} className={ classes.icon } />

          <img alt="kp2r" src={ require('../../assets/telegram.svg') } height='36px' onClick={()=> window.open("https://t.me/kp2rnetwork", "_blank")} className={ classes.icon } />

          <img alt="kp2r" src={ require('../../assets/github.svg') } height='36px' onClick={()=> window.open("https://github.com/kp2r-network", "_blank")} className={ classes.icon } />

          <img alt="kp2r" src={ require('../../assets/medium.svg') } height='36px' onClick={()=> window.open("https://medium.com/@kp2rnetwork", "_blank")} className={ classes.icon } />

          <img alt="kp2r" src={ require('../../assets/reddit.svg') } height='36px' onClick={()=> window.open("https://www.reddit.com/user/kp2rnetwork", "_blank")} className={ classes.icon } />
        </div>
      </div>
      <div className={ classes.products }>
        <Typography className={ classes.heading } variant={ 'h6'}>Contact</Typography>
        <div  className={ classes.link } onClick={()=> window.open("mailto:info@kp2r.network", "_blank")} >
          <img alt="kp2r" src={ require('../../assets/email.svg') } height='24px' className={ classes.icon } />
          <Typography variant={ 'h4'} >Info</Typography>
        </div>
        <div  className={ classes.link } onClick={()=> window.open("mailto:support@kp2r.network", "_blank")} >
          <img alt="kp2r" src={ require('../../assets/email.svg') } height='24px' className={ classes.icon } />
          <Typography variant={ 'h4'} >Support</Typography>
        </div>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
