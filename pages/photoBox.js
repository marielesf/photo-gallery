import Image from 'next/image';
import { PhotoService } from '../services/photoService';
import styles from '../styles/Home.module.css';

export default function PhotoBox() {
  function imageGridItem(image) {
    return image.width - image.height > 2000
      ? styles.gridColumn
      : image.height - image.width > 2000
      ? styles.gridRow
      : styles.imgGrid;
  }

  return (
    <>
      {PhotoService?.getAll()?.map((item) => (
        <div
          className={imageGridItem(item.imgPath)}
          data-testid={`image-box-${item.id}`}
          key={item.id}
        >
          <Image
            src={item.imgPath}
            placeholder="blur" //show fisrt a blur image
            quality={100} // quality returned from the server the default is 75
            alt={item.alternativeText}
            loading="lazy"
          />
        </div>
      ))}
    </>
  );
}
