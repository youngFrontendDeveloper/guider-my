import styles from "./Categories.module.scss";
import {getCategories} from "@/services/getCategories";
import {CategoriesItem} from "@/entities/categories/categoriesItem/ui";
import {CategoriesType} from "@/types/CategoriesType";



export async function Categories() {
    const categories: CategoriesType[] = await getCategories();

    return (
        <section className={styles.categories}>
            {
                categories.map((item:CategoriesType ) => <CategoriesItem key={item.id} item={item} />)
            }
        </section>

    )
}