
import styles from './page.module.scss'
import {Categories} from "@/entities/categories";


export default function Home() {
  return (
    <div className={styles["home-page"]}>
        <h1 className="hidden">Costa Rica Travel Guide Website</h1>
        <h2 className='title'>Guider</h2>
        <h3 className='subtitle'>
                <span className='subtitle subtitle--red'>
                Explore
                </span> &nbsp;
            costa rica
        </h3>
      <Categories />
    </div>
  )
}
