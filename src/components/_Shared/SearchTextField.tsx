import React from 'react';
import { InputBase, makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

type SearchTextFieldProps = {
    placeholder?: string,
    onChange?: (value: string) => void | Promise<void>,
    value?: string
};

export function SearchTextField(props: SearchTextFieldProps) {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Search />
            </div>
            <InputBase
                placeholder="Search for a dictionary…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
                value={props.value}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

