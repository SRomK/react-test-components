import styles from './LoadingButton.module.css';

import React, { Component } from 'react';
import { Button,  CircularProgress } from '@mui/material';


export default class LoadingButton extends Component {
	render() {
        const {id, disabled, isLoading, className, onClick, label} = this.props;

        return (
            <Button
                id = {id}
                disabled={isLoading||disabled}
                className={className} 
                onClick={onClick}
                >
                {isLoading && <CircularProgress className={styles.circularProgress} /> }
                <span>{label}</span>
            </Button>

        );
    }
}