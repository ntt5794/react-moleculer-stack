import { ButtonBase, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useCardStyles } from '../../styles/CardStyles';
import { useModalStyles } from '../../styles/ModalStyles';
const Card = (props) => {
    const { data: item } = props;
    const cardClasses = useCardStyles();
    const modalClasses = useModalStyles();
    return (
    <div style={ { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } className={modalClasses.paper}>        
        <Grid container item direction="column" xs={12} spacing={4}>
            <Grid className={cardClasses.center} item sm xs={12}>
                <ButtonBase className={cardClasses.image}>
                    <img className={cardClasses.img} height={200} src={`/${item.image}`} alt={item.name} />
                </ButtonBase>
            </Grid>
            <Grid item sm xs={12} container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>                
                    <Typography variant="subtitle2">
                        Price: {item.price} VND
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        Product Name: {item.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Description: {item.description}
                    </Typography>
                    <Typography variant="body2">
                        Serial: {item.serial}
                    </Typography>
                    <Typography variant="body2">
                        Type: {item.type}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        Contact: 0964551275
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
};

export default Card;
