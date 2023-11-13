import styles from "./Categories.module.scss"

import {getCategories} from "@/services/getCategories";
import {CategoriesItem} from "@/entities/categories/categoriesItem/ui";


export async function Categories() {
    const categories = await getCategories();

    return (
        <section>
            <h1 className="hidden">Сайт-путеводитель по Коста-Рики</h1>
            <h2 className={styles.title}>Guider</h2>
            <h3 className={styles.subtitle}>
                <span className={`${styles.subtitle} ${styles["subtitle--red"]}`}>
                Explore
                </span> &nbsp;
                costa rica
            </h3>
            <div className={styles.category}>
                {
                    categories.map(item => <CategoriesItem key={item.id} item={item} />)
                }
            </div>

        </section>

    )
}