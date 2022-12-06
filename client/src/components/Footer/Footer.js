import React from "react";
import { Avatar, BottomNavigation, BottomNavigationAction, Divider, List, ListItem, ThemeProvider } from "@material-ui/core";

import './footer.css';

import instagram_icon from '../../assets/img/icons/instagram_icon.png';
import github_icon from '../../assets/img/icons/github_icon.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import JFAClogo from '../../assets/img/logo/JFAC-logo.png';

const Footer = () => {
    
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <>
            <BottomNavigation xs={12} value={value} onChange={handleChange} className={`footer`}>
                
                <BottomNavigationAction
                    label='@fieldbenders_archive'
                    value='instagram'
                    icon={<InstagramIcon
                            color={'primary'}
                        />}
                />
                <Divider/>
                <BottomNavigationAction
                    label='github_repo'
                    value='github'
                    icon={<GithubIcon 
                        color={'primary'}
                    />}
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