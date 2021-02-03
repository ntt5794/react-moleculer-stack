import React from 'react';
import {
    CssBaseline,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Drawer
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { appLogo, appName } from '../configs/app';
import { useAppBarStyles, useStyles, useAppBarToolbarStyles } from './BaseLayoutClasses';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import LeftMenu from '../commons/LeftMenu';
import { useDispatch, useSelector } from 'react-redux';
// import { getProfileAction } from '../redux/actions/auth';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import { storage } from '../services/storage.service';

function BaseLayout(props) {
    const appBarClasses = useAppBarStyles()
    const appBarToolbarClasses = useAppBarToolbarStyles()
    const classes = useStyles()
    const theme = useTheme()
    const dispatch = useDispatch()
    const history = useHistory()
    const { container, nav } = props

    const [mobileOpen, setMobileOpen] = React.useState(false)
    const handleDrawerMobileToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const [open, setOpen] = React.useState(!!storage.getItem('DrawerToggle'))
    const handleDrawerToggle = () => {
        if (open)
        storage.removeItem('DrawerToggle')
        else
        storage.setItem('DrawerToggle', 'show')
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar classes={appBarClasses} position='fixed' color='secondary'>
                <Toolbar classes={appBarToolbarClasses}>
                    <Hidden xsDown implementation='css'>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smUp implementation='css'>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleDrawerMobileToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Link component={RouterLink} to='/' className={classes.logoLink}>
                        <img src={appLogo} alt={appName} className={classes.logoImg} />
                        <Typography
                            variant='h5'
                            color='inherit'
                            style={{
                                fontWeight: 600
                            }}>
                            {appName}
                        </Typography>
                    </Link>
                    <Box display='flex' ml='auto'>
                        Login
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label='mailbox folders'>
                <Hidden smUp implementation='css'>
                    <Drawer
                        container={container}
                        variant='temporary'
                        anchor={theme.direction === 'rtl'
                            ? 'right'
                            : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerMobileToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true/* Better open performance on mobile. */
                        }}>
                        <LeftMenu active={nav} />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation='css'>
                    <Drawer
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open
                            })
                        }}
                        variant='permanent'
                        open={open}>
                        <LeftMenu active={nav} />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.toolbar} /> {props.children}
                </div>
            </main>
        </div>
    )
}
export default BaseLayout
