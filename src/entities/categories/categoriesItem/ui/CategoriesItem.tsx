import styles from "./CategoriesItem.module.scss"
import Link from "next/link";
import Image from "next/image"
import {CategoriesType} from "@/types/CategoriesType";

export function CategoriesItem({item}:CategoriesType) {

    return (
        <div className={styles["category__item"]}>
            <Link href={item.href} className={styles["category__link"]}>
                <Image
                    srcset={`${item.srcMb2x} 2x`}
                    src={item.srcMb}
                    width={350}
                    height={264}
                    alt={item.title}
                    className={styles["category__img-mb"]}
                    loading="lazy"
                />
                <Image
                    src={item.src}
                    srcset={`${item.src2x} 2x`}
                    width={388}
                    height={344}
                    alt={item.title}
                    className={styles["category__img"]}
                    loading="lazy"
                />
            </Link>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <span>{item.number} places</span>
        </div>
    )
}