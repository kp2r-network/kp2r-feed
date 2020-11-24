import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
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
    marginTop: '80px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }
  },
  footerDis: {
  padding: '20px',
  display: 'flex',
  width: '100%',
  borderTop: '2px',
  borderColor: colors.darkGray,
  color: colors.darkGray,
  background: '#2C3040',
  flexWrap: 'wrap',
  borderTop: '1px solid '+colors.borderBlue,
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
  cplink: {
    paddingTop: '22px',
    paddingBottom: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
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
          <Typography className={ classes.heading } variant={ 'h3'}>Documentation</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/docs.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Docs</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/registry", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/registry.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Registry</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/keepers")} >
            <img alt="kp2r" src={ require('../../assets/icons/keeper.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Keepers</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://docs.kp2r.network/jobs", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/job.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Jobs</Typography>
          </div>
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h3'}>Useful Links</Typography>
          <div  className={ classes.link } onClick={()=> window.open("/pre-sale")} >
            <img alt="kp2r" src={ require('../../assets/icons/discount.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Pre Sales <span role='img' description='fire' aria-label='pre-sale' aria-labelledby='kp2r'> 🔥</span></Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("/how-to-use", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/guide.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >How to Use</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://feed.kp2r.network", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/data.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Feed Oracle</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://etherscan.io/token/0x9bde098be22658d057c3f1f185e3fd4653e2fbd1", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/contract.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >KP2R Contract</Typography>
          </div>
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h3'}>Media Partner</Typography>
            <div  className={ classes.link } >
              <img alt="kp2r" src={ require('../../assets/partner/ct.svg') } height='42px' onClick={()=> window.open("/", "_blank")} className={ classes.icon } />
            </div>
            <div  className={ classes.link } >
              <img alt="kp2r" src={ require('../../assets/partner/ether.png') } height='32px' onClick={()=> window.open("https://etherscan.io/dapp/0x9bde098be22658d057c3f1f185e3fd4653e2fbd1", "_blank")} className={ classes.icon } />
            </div>
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h3'}>Market Data</Typography>
          <div  className={ classes.link } >
            <img alt="CoinGecko" src={ require('../../assets/partner/uni.png') } height='36px' onClick={()=> window.open("https://info.uniswap.org/pair/0xbf89051f8d04ad770e2231e9335d3b7483a0a51f", "_blank")} className={ classes.icon } />
            <img alt="CMC" src={ require('../../assets/partner/cmc.png') } height='36px' onClick={()=> window.open("https://coinmarketcap.com/currencies/kp2r-network/", "_blank")} className={ classes.icon } />
            <img alt="CoinGecko" src={ require('../../assets/partner/cg.png') } height='36px' onClick={()=> window.open("/", "_blank")} className={ classes.icon } />
          </div>
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h3'}>Contact</Typography>
          <div  className={ classes.link } onClick={()=> window.open("mailto:info@kp2r.network", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/info.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Info</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("mailto:support@kp2r.network", "_blank")} >
            <img alt="kp2r" src={ require('../../assets/icons/email.svg') } height='20px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Support</Typography>
          </div>
          <Typography className={ classes.heading } variant={ 'h3'}>Social Links</Typography>
          <div  className={ classes.link } >
            <img alt="kp2r" src={ require('../../assets/icons/twitter.svg') } height='24px' onClick={()=> window.open("https://twitter.com/kp2rnetwork", "_blank")} className={ classes.icon } />

            <img alt="kp2r" src={ require('../../assets/icons/telegram.svg') } height='24px' onClick={()=> window.open("https://t.me/kp2rnetwork", "_blank")} className={ classes.icon } />

            <img alt="kp2r" src={ require('../../assets/icons/github.svg') } height='24px' onClick={()=> window.open("https://github.com/kp2r-network", "_blank")} className={ classes.icon } />

            <img alt="kp2r" src={ require('../../assets/icons/medium.svg') } height='24px' onClick={()=> window.open("https://medium.com/@kp2rnetwork", "_blank")} className={ classes.icon } />

            <img alt="kp2r" src={ require('../../assets/icons/reddit.svg') } height='24px' onClick={()=> window.open("https://www.reddit.com/user/kp2rnetwork", "_blank")} className={ classes.icon } />
          </div>
        </div>
        <div className={classes.footerDis}>
       Risk Disclaimer: Cryptocurrency asset is a kind of innovative investment product, with very volatile price. Established to provide convenience for all - new to old, KP2R Network. only serves as a neutral trading platform. Please make accute judgement of your investment capability and make investment decision. KP2RNetwork is strictly suggesting to the citizens of Bangladesh, Pakistan, Srilanka and USA not to invest in Keep2r ecosystem & any of its concern. KP2RNetwork is a open source platform. Which is not a custodial service for assets. Trading access to or holding positions on KP2R Network. is prohibited for any person that is located in or a resident of the United States of America, Québec (Canada), Cuba, Crimea and Sevastopol, Iran, Syria, North Korea, Sudan, or any other jurisdiction where the services offered by KP2R Network. are restricted. If it is determined that any KP2R Network. trading participant has given false representations as to their location or place of residence, KP2R Network. reserves the right to close any of their accounts immediately and to liquidate any open positions. This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. Any views expressed on KP2R Network. Research reports are the personal views of the authors. KP2R Network. (or any affiliated entity) has not been involved in producing this report and the views contained in the report may differ from the views or opinions of KP2R Network.
        <div  className={ classes.cplink } onClick={()=> window.open("https://omgswap.in/", "_blank")} >© 2020 Copyright - KP2R Network is A Concern of Omega Protocol Ltd.
        </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
