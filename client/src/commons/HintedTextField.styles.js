import { Tooltip, makeStyles } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
    },
    input: {
        paddingRight: -30
    }
}));

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1]
    }
}))(Tooltip);

export {
    useStyles,
    LightTooltip
}