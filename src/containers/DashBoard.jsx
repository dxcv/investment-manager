import React, { useState, useContext, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
/**
 * Material-UI
 */
import {
	CssBaseline,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	Container,
	Grid,
	ListItem,
	ListItemIcon,
	ListItemText,
	Badge
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
/**
 * Components
 */
import GoodsCard from '../components/GoodsCard.jsx';
import DashBoardStyle from '../style/DashBoardStyle';
import StoreContext from '../stores';

const Dashboard = () => {
	const classes = DashBoardStyle();
	// store
	const store = useContext(StoreContext);
	const { user, initUser, goods, initGoods } = store;
	useEffect(() => {
		if (goods.length === 0) {
			initGoods();
		}
		// eslint-disable-next-line
	}, []);

	const [allCars, carsCashBack, carsNotCashBack, goodsInfo, userInfo] = [
		'allCars',
		'carsCashBack',
		'carsNotCashBack',
		'goodsInfo',
		'userInfo'
	];
	const [open, setOpen] = useState(false);
	const [drawer, setDrawer] = useState(allCars);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='absolute'
				className={clsx(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						component='h1'
						variant='h6'
						color='inherit'
						noWrap
						className={classes.title}
					>
						Dashboard
					</Typography>
					<IconButton color='inherit'>
						<Badge color='secondary'>
							<AddCircleOutlineIcon />
						</Badge>
						<span>添加</span>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button onClick={() => setDrawer(allCars)}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='全部车辆' />
					</ListItem>
					<ListItem button onClick={() => setDrawer(carsCashBack)}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='已回款' />
					</ListItem>
					<ListItem button onClick={() => setDrawer(carsNotCashBack)}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='未回款' />
					</ListItem>
					<ListItem button onClick={() => setDrawer(goodsInfo)}>
						<ListItemIcon>
							<ShoppingCartIcon />
						</ListItemIcon>
						<ListItemText primary='车辆信息' />
					</ListItem>
					<ListItem button onClick={() => setDrawer(userInfo)}>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary='我的' />
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='lg' className={classes.container}>
					{drawer === allCars && <div>AllCars</div>}
					{drawer === carsCashBack && <div>CarsCashBack</div>}
					{drawer === carsNotCashBack && <div>CarsNotCashBack</div>}
					{drawer === goodsInfo && (
						<Grid container spacing={2}>
							<GoodsCard goods={toJS(goods)} />
						</Grid>
					)}
					{drawer === userInfo && <div>My</div>}
				</Container>
			</main>
		</div>
	);
};

export default observer(Dashboard);