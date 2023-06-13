import {React} from 'react';
import style from './subTop.module.scss';
import rankStyle from './ranking.module.scss';
import {postsDataMock} from '../mock/postsDataMock';
import Detail from './detail';

const Categories = (props) => {
    const DataReal = {
        postsDataMock
    };
    window.scrollTo({top: 0, behavior: "smooth"});

    const ViewSubTitle = DataReal
        .postsDataMock
        .map(movie => {
            const result = [];

            if (props.categories === "all") {
                for (let num = 0; num < movie.keyword.length; num++) {
                    result.push(
                        <span className={style['top-sub-keyword']}>
                            {movie.keyword[num]}
                        </span>
                    );
                }
                return (
                    <div
                        className={style['top-sub-feature-cursor']}
                        onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                        <div className={style['top-sub-feature']}>{movie.title.rendered}</div>
                        <div className={style['top-sub-feature-content']}>

                            <img src={movie.url} className={style['top-sub-feature-img']} alt='React'/>

                            <span className={style['top-sub-feature-area']}>
                                <span className={style['top-sub-feature-text']}>{movie.excerpt.rendered}</span>
                                <span>
                                    <div className={style['top-sub-feature-line']}>
                                        <div className={style['top-sub-detail']}>
                                            続きを読む≫
                                        </div>
                                        <div className={style['top-sub-detail']}>
                                            <span className={style['top-sub-new']}>NEW</span>
                                            <span className={style['top-sub-day']}>{movie.date}</span>
                                        </div>
                                        <hr/>
                                        <div className={style['top-sub-keyword-align']}>
                                            {result}
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                );
            } else if (movie.categories[0] == props.categories) {
                for (let num = 0; num < movie.keyword.length; num++) {
                    result.push(
                        <span className={style['top-sub-keyword']}>
                            {movie.keyword[num]}
                        </span>
                    );
                }
                return (
                    <div
                        className={style['top-sub-feature-cursor']}
                        onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                        <div className={style['top-sub-feature']}>{movie.title.rendered}</div>
                        <div className={style['top-sub-feature-content']}>

                            <img src={movie.url} className={style['top-sub-feature-img']} alt='React'/>

                            <span className={style['top-sub-feature-area']}>
                                <span className={style['top-sub-feature-text']}>{movie.excerpt.rendered}</span>
                                <span>
                                    <div className={style['top-sub-feature-line']}>
                                        <div className={style['top-sub-detail']}>
                                            続きを読む≫
                                        </div>
                                        <div className={style['top-sub-detail']}>
                                            <span className={style['top-sub-new']}>NEW</span>
                                            <span className={style['top-sub-day']}>{movie.date}</span>
                                        </div>
                                        <hr/>
                                        <div className={style['top-sub-keyword-align']}>
                                            {result}
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                );
            }
        })
    return (
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 col-shadow ...">
                <div className={rankStyle['ranking-item']}>
                    <div className={rankStyle['ranking-title']}>{props.title}</div>
                </div>

                {ViewSubTitle}
            </div>
        </div>
    );
}

export default Categories;
