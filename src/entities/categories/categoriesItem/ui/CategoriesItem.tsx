import styles from "./CategoriesItem.module.scss"
import Link from "next/link";
import Image from "next/image"
import {CategoriesType} from "@/types/CategoriesType";

export function CategoriesItem({item}:CategoriesType) {

    return (
        <div className={styles["category"]}>
            <Link href={item.href} className={styles["category__link"]}>
                <Image
                    srcSet={`${item.srcMb2x} 2x`}
                    src={item.srcMb}
                    width={350}
                    height={264}
                    alt={item.title}
                    className={styles["category__img-mb"]}
                    loading="lazy"
                />
                <Image
                    src={item.src}
                    srcSet={`${item.src2x} 2x`}
                    width={388}
                    height={344}
                    alt={item.title}
                    className={styles["category__img"]}
                    loading="lazy"
                />
                <span style={{backgroundColor: `${item.bgColor}`}} className={styles["category__icon-wrap"]}>
                    <Image src={item.icon} width={22} height={22} alt={`Иконка ${item.title}`}/>
                </span>
            </Link>
            <p className={styles['category__title']}>{item.title}</p>
            <p className={styles['category__description']}>{item.description}</p>
            <span className={styles["category__places"]}>{item.number} places</span>
        </div>
    )
}