import React from 'react';
import Fakultas from 'C:/Users/LAB PEMODELAN - 23/FRTND/tgsfrt/components/Fakultas';
import UKM from '@/components/Unit';
import Jurusan from '@/components/Unit';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>
                Sistem Informasi Kampus
            </h1>

            <h2> Pilih Fakultas:</h2>
            <Fakultas/>

            <h2> Pilih Jurusan:</h2>
            <Jurusan/>

            <h2> Pilih UKM:</h2>
            <UKM/>


        </div>
    );
}

export default HomePage;