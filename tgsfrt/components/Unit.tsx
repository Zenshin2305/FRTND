import React from 'react'
import {Select, MenuItem} from '@mui/material';

interface UkmProps{

}

const UKM:React.FC<UkmProps> = () => {
    return (
        <Select>
            <MenuItem value={1}>Sepak Bola</MenuItem>
            <MenuItem value={2}>Basket</MenuItem>
            <MenuItem value={3}>Pecinta Alam</MenuItem>
        </Select>
    );
};

export default UKM;