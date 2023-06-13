import {React} from 'react';
import style from '../title/subTop.module.scss';
import rankStyle from '../title/ranking.module.scss';
import {postsDataMock} from '../mock/postsDataMock';
import Detail from '../title/detail';

const Keyword = (props) => {
    const DataReal = {
        postsDataMock
    };
    console.log(DataReal);

    const date = DataReal.postsDataMock.map(movie => {
            const result = [];
            console.log(movie.keyword.length);
            for (let i = 0; i < movie.keyword.length; i++) {
                if (movie.keyword[i] === ("#" + props.keyword)) {

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
            }
        });

    return (
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 col-shadow ...">
                <div className={rankStyle['ranking-item']}>
                    <div className={rankStyle['ranking-title']}>{props.keyword}</div>
                </div>
                {date}
            </div>
        </div>
    );
}

export default Keyword;
