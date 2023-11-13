import styles from "./CategoriesItem.module.scss"
import Link from "next/link";
import Image from "next/image"

export function CategoriesItem({item}) {
    return (
        <div className={styles["category__item"]}>
            <Link href={item.href}>
                <Image src={item.src} width={388} height={344} alt={item.title} />
            </Link>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <span>{item.number} places</span>
        </div>
    )
}