import SubTop from './subTop';
import {React, useState} from 'react';
import SubTopVideo from './subTopVideo';
import Feature from './feature';
import style from './top.module.scss';
import Detail from './detail';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
import {postsDataMock} from '../mock/postsDataMock';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Top = (props) => {
    const DataReal = {
        postsDataMock
    };
    let obj = DataReal.postsDataMock;
    const [ViewSubTitle, setViewSubTitle] = useState(
        <Feature obj={obj} setViewSubTitle={props.setViewSubTitle}/>
    );
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const result = [];
    for (let num = 0; num < obj[0].keyword.length; num++) {
        result.push(
            <span className={'top-keyword'}>
                {obj[0].keyword[num]}
            </span>
        );
    }

    const result1 = [];
    for (let num = 0; num < obj[1].keyword.length; num++) {
        result1.push(
            <span className={'top-keyword'}>
                {obj[1].keyword[num]}
            </span>
        );
    }

    const result2 = [];
    for (let num = 0; num < obj[2].keyword.length; num++) {
        result2.push(
            <span className={'top-keyword'}>
                {obj[2].keyword[num]}
            </span>
        );
    }

    const result3 = [];
    for (let num = 0; num < obj[3].keyword.length; num++) {
        result3.push(
            <span className={'top-keyword'}>
                {obj[3].keyword[num]}
            </span>
        );
    }

    const result4 = [];
    for (let num = 0; num < obj[4].keyword.length; num++) {
        result4.push(
            <span className={'top-keyword'}>
                {obj[4].keyword[num]}
            </span>
        );
    }

    const result5 = [];
    for (let num = 0; num < obj[5].keyword.length; num++) {
        result5.push(
            <span className={'top-keyword'}>
                {obj[5].keyword[num]}
            </span>
        );
    }

    return (
        <div>
            <div className={style['top-font']}>
                {/* <div className = {style['top-left-right']}>
                <img src='/left.png' alt='React' />
                </div> */}
                <div className={style['top-img']}>
                    <div className={style['top-swiper']}>
                    <Swiper
                       className="banner"
                       spaceBetween={50}
                       slidesPerView={3}
                       navigation
                       pagination={{ clickable: true }}
                       autoplay={{ delay: 3000 , disableOnInteraction : false}}
                       >

                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[0].id}/>)}>
                       <img src={obj[0].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                         {obj[0].title.rendered}
                       </div>
                       <hr className = {style['top-line']}/>
                         {result} 
                       </SwiperSlide>
            
                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[1].id}/>)}>
                       <img src={obj[1].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                         {obj[1].title.rendered}
                       </div>
                       <hr className = {style['top-line']}/>
                         {result1} 
                       </SwiperSlide>

                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[2].id}/>)}>
                       <img src={obj[2].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                         {obj[2].title.rendered}
                       </div>
                       <hr className = {style['top-line']}/>
                         {result2}
                       </SwiperSlide>

                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[3].id}/>)}>
                       <img src={obj[3].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                         {obj[3].title.rendered}
                       </div>
                       <hr className = {style['top-line']}/>
                         {result3}
                       </SwiperSlide>

                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[4].id}/>)}>
                       <img src={obj[4].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                         {obj[4].title.rendered}
                       </div>
                       <hr className = {style['top-line']}/>
                         {result4}
                       </SwiperSlide>

                       <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[5].id}/>)}>
                       <img src={obj[5].url} class= {style['top-main-img']} alt='React' />
                       <div className = {style['top-font-size']}>
                       {obj[5].title.rendered}
                         </div>
                       <hr className = {style['top-line']}/>
                         {result5}
                       </SwiperSlide>
                       </Swiper>

                    </div>
                </div>
                {/* <div className = {style['top-left-right']}>
                <img src='/right.png' alt='React' />
                </div>  */}
            </div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 col-shadow ...">
                    <SubTop obj={obj} setViewSubTitle={props.setViewSubTitle}/>
                </div>
            </div>

            <SubTopVideo/>

            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4  ...">
                    <div className={style['top-sub']}>
                        <button className={style['top-sub-button']}>
                            動画一覧</button>
                        <hr/>
                        <div className={style['top-sub-title']}>特集記事</div>
                    </div>
                </div>
            </div>
            {ViewSubTitle}
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 col-last-shadow ...">
                    <div className={style['top-sub']}>
                        <button
                            className={style['top-sub-button']}
                            onClick={() => props.setViewSubTitle(<Feature obj={obj} title="特集記事一覧" setViewSubTitle={props.setViewSubTitle}/>)}>
                            特集記事一覧</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
