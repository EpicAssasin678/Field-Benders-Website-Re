import React from "react";
import { Avatar, BottomNavigation, BottomNavigationAction, Divider, List, ListItem, ThemeProvider } from "@material-ui/core";

import './footer.css';

import instagram_icon from '../../assets/img/icons/instagram_icon.png';
import github_icon from '../../assets/img/icons/github_icon.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import PatreonIcon from '../../assets/img/icons/patreon_logo.png';
import PaypalIcon from '../../assets/img/icons/paypal_icon.png';
import JFAClogo from '../../assets/img/logo/JFAC-logo.png';
import Typography from "@material-ui/core/Typography";

const Footer = () => {
    
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <>
            <BottomNavigation xs={12} value={value} onChange={handleChange} className={`footer`}>

                <Typography className="footer-text font-consolas" variant={'caption'}>Property of Field Benders (2023)</Typography>
                <img src={JFAClogo} alt='JFAC logo' className='jfac-logo'/>

                <Divider/>
                <BottomNavigationAction
                    label='instagram'
                    value='instagram'
                    icon={<InstagramIcon
                            color={'primary'}
                        />}
                    href='https://www.instagram.com/field_benders/'
                />
                <Divider/>
                <BottomNavigationAction
                    label='patreon'
                    value='patreon'
                    icon={<img src={PatreonIcon} alt='patreon logo' className='patreon-icon'/> }
                    color={'primary'}
                    href='https://patreon.com/fieldbenders?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link'
                />
                <Divider />
                <BottomNavigationAction 
                    label='paypal'
                    value='paypal'
                    icon={<img src={PaypalIcon} alt='paypal.me link' className="paypal-icon"/>}
                    color={'primary'}
                    href='https://www.paypal.me/zacheryuporsky'
                />
                <Divider/>
                <BottomNavigationAction
                    label='github_repo'
                    value='github'
                    icon={<GithubIcon 
                        color={'primary'}
                    />}
                    href='https://github.com/EpicAssasin678'

                />
            
            </BottomNavigation>

                


        </>
    )
}

export default Footer;

/**
 * 
 *                 <BottomNavigation item>
                    <Avatar 
                        alt='JFAC logo' 
                        src={JFAClogo}
                        className='avatar'
                    />
                </BottomNavigation>
 * 
 */