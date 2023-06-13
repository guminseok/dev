import {React, useState} from 'react';
import style from './subTop.module.scss';
import rankStyle from './ranking.module.scss';
import {postsDataMock} from '../mock/postsDataMock2';
import Detail from './detail';

const SubTopFeature = (props) => {
    const DataReal = {
        postsDataMock
    };
    let obj = DataReal.postsDataMock;

    function custonSort(a, b) {
            if (props.title === "count") {
                if (a.dayCount == b.dayCount) {
                    return 0
                } else {
                return a.dayCount < b.dayCount
                    ? 1
                    : -1;
                }
            }
            if (props.title === "weekCount") {
                if (a.weekCount == b.weekCount) {
                    return 0
                } else { 
                return a.weekCount < b.weekCount
                    ? 1
                    : -1;
                }
               
            }
            if (props.title === "monthCount") {
                if (a.monthCount == b.monthCount) {
                    return 0
                } else {
                return a.monthCount < b.monthCount
                    ? 1
                    : -1;
                }
            }
    }
    if(props.type === "image"){
        obj.sort(custonSort);
    } 
    if(props.type === "video"){
        
    }
  
    if (!props.title) {
        obj = obj.slice(0, 3);
    }
    obj = obj.slice(0, 10);

    const ViewSubTitle = obj.map(movie => {
        const result = [];
        for (let num = 0; num < movie.keyword.length; num++) {
            result.push(
                <span className={style['top-sub-keyword']}>
                    {movie.keyword[num]}
                </span>
            );
        }
        return (
            <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 col-last-shadow ...">
            <div
                className={style['top-sub-feature-cursor']}
                onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                <div className={style['top-sub-feature']}>

                    {
                        movie.id === obj[0].id
                            ? <img src={'./ranking/icon_crown1.svg'}/>
                            : movie.id === obj[1].id
                                ? <img src={'./ranking/icon_crown2.svg'}/>
                                : movie.id === obj[2].id
                                    ? <img src={'./ranking/icon_crown3.svg'}/>
                                    : movie.id === obj[3].id
                                        ? <img src={'./ranking/4位.png'}/>
                                        : movie.id === obj[4].id
                                            ? <img src={'./ranking/5位.png'}/>
                                            : movie.id === obj[5].id
                                                ? <img src={'./ranking/6位.png'}/>
                                                : movie.id === obj[6].id
                                                    ? <img src={'./ranking/7位.png'}/>
                                                    : movie.id === obj[7].id
                                                        ? <img src={'./ranking/8位.png'}/>
                                                        : movie.id === obj[8].id
                                                            ? <img src={'./ranking/9位.png'}/>
                                                            : movie.id === obj[9].id
                                                                ? <img src={'./ranking/10位.png'}/>
                                                                : null
                    }{movie.title.rendered}
                    デ:{movie.dayCount}、週:{movie.weekCount}、月:{movie.monthCount}</div>
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
            </div>
            </div>
        )
    })

    return (
        <div>
            {ViewSubTitle}
        </div>
    );
}

export default SubTopFeature;
