import React from 'react'
import {Select, MenuItem} from '@mui/material';

interface FakultasProps{

}

const Fakultas:React.FC<FakultasProps> = () => {
    return (
        <Select>
            <MenuItem value={1}>Fakultas Teknologi Informasi</MenuItem>
            <MenuItem value={2}>Fakultas Eknomoi dan Bisnis</MenuItem>
        </Select>
    );
};

export default Fakultas;