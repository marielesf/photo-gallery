import home1 from '/assets/home1.jpg';
import home2 from '/assets/home2.jpg';
import home3 from '/assets/home3.jpg';
import mountain1 from '/assets/mountain1.jpg';
import mountain2 from '/assets/mountain2.jpg';
import mountain3 from '/assets/mountain3.jpg';
import mountain4 from '/assets/mountain4.jpg';
import mountain5 from '/assets/mountain5.jpg';
import mountain6 from '/assets/mountain6.jpg';
import nature1 from '/assets/nature1.jpg';
import nature2 from '/assets/nature2.jpg';
import nature4 from '/assets/nature4.jpg';
import nature5 from '/assets/nature5.jpg';
import nature6 from '/assets/nature6.jpg';
import nature7 from '/assets/nature7.jpg';
import nature8 from '/assets/nature8.jpg';
import nature9 from '/assets/nature9.jpg';
import nature10 from '/assets/nature10.jpg';
import nature11 from '/assets/nature11.jpg';
import paint1 from '/assets/paint1.jpg';

const getAll = () => {
  return [
    {
      id: 1,
      imgPath: home1,
      alternativeText: 'Abandoned House with garden',
      width: '50%',
      height: '250px',
    },
    {
      id: 2,
      imgPath: home2,
      alternativeText: 'old house',
      width: '370px',
      height: '250px',
    },
    {
      id: 3,
      imgPath: home3,
      alternativeText: 'castle door',
      width: '370px',
      height: '250px',
    },
    {
      id: 4,
      imgPath: mountain1,
      alternativeText: 'mountain in a cold day',
      width: '370px',
      height: '250px',
    },
    {
      id: 5,
      imgPath: mountain2,
      alternativeText: 'mountain sunset',
      width: '370px',
      height: '250px',
    },
    {
      id: 6,
      imgPath: mountain3,
      alternativeText: 'mountain vale sunset',
      width: '370px',
      height: '250px',
    },
    {
      id: 7,
      imgPath: mountain4,
      alternativeText: 'mountain surface',
      width: '370px',
      height: '250px',
    },
    {
      id: 8,
      imgPath: mountain5,
      alternativeText: 'mountain with snow',
      width: '370px',
      height: '250px',
    },
    {
      id: 9,
      imgPath: mountain6,
      alternativeText: 'mountain and trees',
      width: '170px',
      height: '150px',
    },
    {
      id: 10,
      imgPath: mountain6,
      alternativeText: 'mountain and trees',
      width: '170px',
      height: '150px',
    },
    {
      id: 11,
      imgPath: nature1,
      alternativeText: 'orange butterfly in a leaf',
      width: '170px',
      height: '150px',
    },
    {
      id: 12,
      imgPath: nature2,
      alternativeText: 'florest and a river',
      width: '170px',
      height: '150px',
    },
    {
      id: 13,
      imgPath: nature4,
      alternativeText: 'bridge, florest and a river',
      width: '170px',
      height: '150px',
    },
    {
      id: 14,
      imgPath: nature5,
      alternativeText: 'lake with mountains',
      width: '170px',
      height: '150px',
    },
    {
      id: 15,
      imgPath: nature6,
      alternativeText: 'wooden walkway close the ocean ',
      width: '170px',
      height: '150px',
    },
    {
      id: 16,
      imgPath: nature7,
      alternativeText: 'trees and a bridge',
      width: '170px',
      height: '150px',
    },
    {
      id: 17,
      imgPath: nature8,
      alternativeText: 'flowers',
      width: '170px',
      height: '150px',
    },
    {
      id: 18,
      imgPath: nature9,
      alternativeText: 'sand',
      width: '170px',
      height: '150px',
    },
    {
      id: 19,
      imgPath: nature10,
      alternativeText: 'mountain over the clouds',
      width: '170px',
      height: '150px',
    },
    {
      id: 20,
      imgPath: nature11,
      alternativeText: 'Vitoria-regia under water',
      width: '170px',
      height: '150px',
    },
    {
      id: 21,
      imgPath: paint1,
      alternativeText: 'dead flowers',
      width: '170px',
      height: '150px',
    },
  ];
};

export const PhotoService = {
  getAll,
};
