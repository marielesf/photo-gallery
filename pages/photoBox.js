import Image from 'next/image';
import { PhotoService } from '../services/photoService';
import styles from '../styles/Home.module.css';

export function ImageGridItem(image) {
  return image.width - image.height > 2000
    ? styles.gridColumn
    : image.height - image.width > 2000
    ? styles.gridRow
    : styles.imgGrid;
}

export default function PhotoBox() {
  return (
    <>
      {PhotoService?.getAll()?.map((item) => (
        <div
          className={ImageGridItem(item.imgPath)}
          data-testid={`image-box-${item.id}`}
          key={item.id}
        >
          <Image
            src={item.imgPath}
            placeholder="blur" //show fisrt a blur image
            quality={75} // quality returned from the server the default is 75
            alt={item.alternativeText}
            loading="lazy"
          />
        </div>
      ))}
    </>
  );
}
