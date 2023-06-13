import {React, useState} from 'react';
import useSWR from 'swr';
import axios from "axios";
import style from './ranking.module.scss';
import SubTopFeature from './subTopFeature'

const Ranking = (props) => {
    const [ViewSubTitle, setViewSubTitle] = useState(
        <SubTopFeature
            type="image"
            title="count"
            setViewSubTitle={props.setViewSubTitle}/>
    );
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR(
        "https://media.vwcity.net/wp-json/wp/v2/posts",
        fetcher
    );
    // const DataReal = data;  const test = DataReal.map(movie =>{   return ( <div>
    // {movie.date}         </div>       );   }); console.log({data});
    const [tab, setTab] = useState('count');
    return (
        <div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 col-last-shadow ...">
                    <div className={style['ranking-item']}>
                        <span
                            className={style['ranking-title']}
                            onClick={() => {
                                setViewSubTitle(
                                    <SubTopFeature type="image" title="count" setViewSubTitle={setViewSubTitle}/>
                                );
                                setTab('count');
                            }}>記事ランキング</span>
                        <span
                            className={style['ranking-title']}
                            onClick={() => {
                                setViewSubTitle(
                                    <SubTopFeature type="video" title="count" setViewSubTitle={setViewSubTitle}/>
                                );
                                setTab('count');
                            }}>動画ランキング</span>
                    </div>
                    <div className={style['ranking-sub']}>
                        <div className={style['ranking-sub-title']}>
                            <span
                                className={`rankingBtn ${tab === 'count'
                                    ? 'active'
                                    : ''}`}
                                onClick={() => {
                                    setViewSubTitle(
                                        <SubTopFeature type="image" title="count" setViewSubTitle={setViewSubTitle}/>
                                    );
                                    setTab('count');
                                }}>
                                デイリー</span>
                            <span
                                className={`rankingBtn ${tab === 'weekCount'
                                    ? 'active'
                                    : ''}`}
                                onClick={() => {
                                    setViewSubTitle(
                                        <SubTopFeature
                                            type="image"
                                            title="weekCount"
                                            setViewSubTitle={setViewSubTitle}/>
                                    );
                                    setTab('weekCount');
                                }}>
                                週間</span>
                            <span
                                className={`rankingBtn ${tab === 'monthCount'
                                    ? 'active'
                                    : ''}`}
                                onClick={() => {
                                    setViewSubTitle(
                                        <SubTopFeature
                                            type="image"
                                            title="monthCount"
                                            setViewSubTitle={setViewSubTitle}/>
                                    );
                                    setTab('monthCount');
                                }}>
                                月間</span>
                        </div>
                        <hr className={style['ranking-line']}/>
                    </div>
                </div>
            </div>
            {ViewSubTitle}
        </div>
    );
}

export default Ranking;
