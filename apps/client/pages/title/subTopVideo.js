import {React, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
import {postsDataMock} from '../mock/postsDataMock4';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import style from './top.module.scss';
import Detail from '../title/detail';

const SubTopVideo = (props) => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const DataReal = {
        postsDataMock
    };
    let obj = DataReal.postsDataMock;
    function custonSort(a) {
        if (a.video) {
            return -1
        }
        if (!a.video) {
            return 1
        }
    }
    obj.sort(custonSort);
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
                <div className={style['top-img']}>
                    <div className={style['top-swiper-video']}>
                    <Swiper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 , disableOnInteraction : false}}
                    >
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[0].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[0].url} ></iframe>
                    {/*    <iframe src={obj[0].url} width="650" height="315" alt='React'/> */}
                    <div className = {style['top-font-size']}>
                    {obj[0].title.rendered}
                      </div>
                    <hr className = {style['top-line']}/>
                      {result}
                    </SwiperSlide>
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[1].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[1].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <img src={obj[1].url} class= {style['top-main-img']} alt='React' /> */}
                    <div className = {style['top-font-size']}>
                      {obj[1].title.rendered}
                    </div>
                    <hr className = {style['top-line']}/>
                      {result1}
                    </SwiperSlide>
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[2].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[2].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className = {style['top-font-size']}>
                    {obj[2].title.rendered}
                      </div>
                    <hr className = {style['top-line']}/>
                      {result2}
                    </SwiperSlide>
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[3].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[3].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className = {style['top-font-size']}>
                    {obj[3].title.rendered}
                      </div>
                    <hr className = {style['top-line']}/>
                      {result3}
                    </SwiperSlide>
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[4].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[4].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className = {style['top-font-size']}>
                    {obj[4].title.rendered}
                      </div>
                    <hr className = {style['top-line']}/>
                      {result4}
                    </SwiperSlide>
                    <SwiperSlide className = {style['top-swipert']} onClick={() => props.setViewSubTitle(<Detail title={obj[5].id} type="V"/>)}>
                    <iframe className = {style['top-video']} src={obj[5].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className = {style['top-font-size']}>
                    {obj[5].title.rendered}
                      </div>
                    <hr className = {style['top-line']}/>
                      {result5}
                    </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubTopVideo;
