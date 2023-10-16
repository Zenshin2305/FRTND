import React from 'react'
import {Select, MenuItem} from '@mui/material';

interface JurusanProps{

}

const Jurusan:React.FC<JurusanProps> = () => {
    return (
        <Select>
            <MenuItem value={1}>Rekayasa Perangkat Lunak</MenuItem>
            <MenuItem value={2}>Sistem Informasi</MenuItem>
            <MenuItem value={3}>Informatika</MenuItem>
        </Select>
    );
};

export default Jurusan;