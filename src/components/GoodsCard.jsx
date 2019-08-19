import React from 'react';
import PropTypes from 'prop-types';
/**
 * Material-UI
 */
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import DashBoardStyle from '../style/DashBoardStyle';

const GoodsCard = props => {
	const classes = DashBoardStyle();
	return props.goods.map(({ _id, name, day, rate }) => {
		const img = require(`../image/${name}.jpg`);
		return (
			<Grid key={_id} item xs={12} sm={6} md={4} lg={3}>
				<Card>
					<CardActionArea>
						<CardMedia component='img' alt={name} image={img} title={name} />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{name}
							</Typography>
							<Typography gutterBottom variant='body2' component='span'>
								天数：
								{day}天
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='span'
								className={classes.cardSeperator}
							>
								|
							</Typography>
							<Typography gutterBottom variant='body2' component='span'>
								收益率：
								{rate / 10}%
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		);
	});
};

GoodsCard.propTypes = {
	goods: PropTypes.array
};

export default GoodsCard;
