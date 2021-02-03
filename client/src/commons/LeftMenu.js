import {
  DashboardOutlined as DashboardIcon,
  CallOutlined as CustomerServiceIcon,
  InfoOutlined as AboutUsIcon,
  VisibilityOutlined as Visibility
} from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import {
  appLogo,
  appName
} from '../configs/app';
import {
  useListItemIconNavStyles,
  useListItemNavStyles,
  useListItemTextNavStyles,
  useListNavStyles
} from '../styles/ListNavStyles';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {useStyles} from './LeftMenuClasses';

export default function (props) {
    const {active} = props
    const classes = useStyles()
    const listNavClasses = useListNavStyles()
    const listItemNavClasses = useListItemNavStyles()
    const listItemIconNavClasses = useListItemIconNavStyles()
    const listItemTextNavClasses = useListItemTextNavStyles()
    return (
        <div>
            <div className={classes.toolbar}>
                <Link href='/' className={classes.logoLink}>
                    <img src={appLogo} alt={appName} className={classes.logoImg}/>
                    <Typography
                        variant='h5'
                        color='inherit'
                        style={{
                        fontWeight: 600
                    }}>
                        {appName}
                    </Typography>
                </Link>
            </div>
            <List component='div' classes={listNavClasses}>
                <Box pr={1}>
                    <ListItem
                        selected={active === 'home'}
                        classes={listItemNavClasses}
                        component={RouterLink}
                        to='/'
                        button>
                        <ListItemIcon classes={listItemIconNavClasses}><DashboardIcon/></ListItemIcon>
                        <ListItemText classes={listItemTextNavClasses} primary={'Products'}/>
                    </ListItem>
                    <ListItem
                        selected={active === 'About'}
                        classes={listItemNavClasses}
                        component={RouterLink}
                        to='/about'
                        button>
                        <ListItemIcon classes={listItemIconNavClasses}><AboutUsIcon/></ListItemIcon>
                        <ListItemText classes={listItemTextNavClasses} primary='About Us'/>
                    </ListItem>
                </Box>
                <Divider/>
                <Box pr={1}>
                    <ListItem classes={listItemNavClasses} button>
                        <ListItemIcon classes={listItemIconNavClasses}><CustomerServiceIcon/></ListItemIcon>
                        <ListItemText classes={listItemTextNavClasses} primary='0964551275'/>
                    </ListItem>
                </Box>
            </List>
        </div>
    )
}
