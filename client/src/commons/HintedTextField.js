import { LightTooltip, useStyles } from './HintedTextField.styles';

import React from 'react';
import { TextField } from '@material-ui/core';

const HintedTextField = props => {
    const loading = false;
    const classes = useStyles();
    const { variant, id, name, label, title, fullWidth, placement, onChange } = props;
    return (
        <LightTooltip arrow title={title} placement={placement || 'top'}>
            {fullWidth ?
                <TextField onChange={onChange} name={name} fullWidth variant={variant || "outlined"} id={id} label={label} />
                :
                <TextField onChange={onChange} name={name} variant={variant || "outlined"} id={id} label={label} />
            }
        </LightTooltip>
    );
}

export { HintedTextField }