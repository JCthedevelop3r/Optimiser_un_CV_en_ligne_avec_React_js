import React, { useState, useEffect } from 'react';

import bannerMobile from '../images/img/banner-mobile.jpg';
import bannerTablet from '../images/img/banner-tablette.jpg';
import bannerDesktop from '../images/img/banner.jpg';

// Permet d'afficher la bonne bannière en fonction de la viewport dynamiquement
export default function ChangeBanner() {
    //Permet d'obtenir l'URL de la bannière correspondante à la viewport du navigateur
    const getBanner = () => {
        const viewportWidth = window.innerWidth;

        if (viewportWidth < 768) {
            return bannerMobile;
        } else if (viewportWidth >= 768 && viewportWidth < 992) {
            return bannerTablet;
        } else {
            return bannerDesktop;
        }
    }

    // eslint-disable-next-line
    const [banner, setBanner] = useState(getBanner());

    useEffect(() => {
    const handleResize = () => {
        setBanner(getBanner());
    };

    window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <img className="banner" src={getBanner()} alt="Rayons lumineux qui se croisent sur fond bleu" />
    )  
}