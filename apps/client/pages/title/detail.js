import {React} from 'react';
import style from './subTop.module.scss';
import rankStyle from './ranking.module.scss';
import {postsDataMock} from '../mock/postsDataMock';
import parser from 'html-react-parser';

const Detail = (props) => {
    const DataReal = {
        postsDataMock
    };

    const type = "";
    
    window.scrollTo({top: 0, behavior: "smooth"});
    const date = DataReal
        .postsDataMock
        .map(movie => { 
            if (movie.id == props.title) {

                if(props.type === "V"){
                    type = <div class={style['img-layout']}>
                            <iframe src={movie.url} width="560" height="315" alt='React'/>
                           </div>
                } else {
                    type = <img src={movie.url} width="60%"  alt='React'/>
                }

                return (
                    <div>
                        <div className={style['top-sub-feature']}>{movie.title.rendered}
                            id: {props.title}</div>
                        {/* <div className={style['top-sub-feature-content']}> */}
                            {/* <img src={movie.url} className={style['top-sub-feature-img']} alt='React' /> */}
                            {/* <img src={movie.url} alt='React'/> */}
                            {type}

                        {/* </div> */}
                        <div>
                            <div className={style['top-sub-keyword-align']}>
                                <span className={style['top-sub-keyword']}>
                                    {movie.keyword[0]}
                                </span>
                                <span className={style['top-sub-keyword']}>
                                    {movie.keyword[1]}
                                </span>
                                <div className={style['top-sub-feature-line']}>
                                    <hr/>
                                </div>

                                <span className={style['top-sub-feature-area']}></span>
                                <span className={style['top-sub-feature-text']}>{parser(movie.excerpt.rendered)}</span>
                                <span className={style['top-sub-feature-text']}>{parser(movie.content.rendered)}</span>

                            </div>
                        </div>
                    </div>
                );
            }
        });

    return (
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 ...">
                <div className={rankStyle['ranking-item']}>
                    <div className={rankStyle['ranking-title']}>詳細画面</div>
                </div>
                {date}
            </div>
        </div>
        // <div class="grid grid-cols-6 gap-4">    <div class="col-start-2 col-span-4
        // ...">     <div>         <h2>新NISAの登場で一般NISAからのロールオーバーが可能に！詳しく解説</h2>
        // <img
        // src="https://media.vwcity.net/wp-content/uploads/2022/07/1640pexels-pixabay-163064-1000x562.jpg"
        // alt='React'/>         <div>            <span> share:             <img
        // src={'./svg/icon_fb.svg'} class={'svg-img'}/>             <img
        // src={'./svg/icon_line.svg'} class={'svg-img'}/>             <img
        // src={'./svg/icon_tw.svg'} class={'svg-img'}/>             </span>
        // </div>         <div class={'div-keyword'}>             <span
        // class={'keyword'}>#暗号資産</span>             <span
        // class={'keyword'}>#口座開設</span>         </div>         <div>
        // 「一般NISAは期間満了したら継続運用できないの？」<br/>
        // 現在の一般NISAは、2023年で投資可能期間を終了します。ただし、終了年に運用開始したとしても、そこから5年間は、非課税で運用できる予定です。<br/>
        // それとは別に非課税期間が終了した際の継続方法として、新NISAへのロールオーバーがあります。今回は、一般NISAからのロールオーバーができる新NISAの非課税対象期間継続について解説します。
        // </div>         <h3 class={'title'}> 一般NISAのロールオーバーとは</h3>         </div>
        // <img src="
        // https://media.vwcity.net/wp-content/uploads/2022/07/andrew-neel-cckf4TsHAuw-unsplash.jpg"
        // />        <div>
        // 一般NISAのロールオーバーとは、一般NISA運用における非課税期間終了時の移管手続きのことです。対象は、NISA口座やジュニアNISA。これら金融商品を非課税期間終了後に移管して翌年も非課税対象とすることができます。<br/>
        // ロールオーバーは、金額に移管上限の制限がありません。時価が非課税枠を超えてしまった場合でも、超えた分もあわせて全対象を非課税投資枠に移管できます。
        // </div>        <div class={'url-text'}>        データ参照元URL：        </div>
        // <div class={'url'}>
        // https://www.fsa.go.jp/policy/nisa2/knowledge/glossary/index.html#tab12-6
        // </div>        <h3 class={'title'}> 新NISAにおけるロールオーバー</h3>
        // <div>一般NISAで非課税期間を迎えた保有資金は、新NISAへロールオーバーが可能です。新NISAへのロールオーバーは、2階建てとなる新NISAの投資対象2階部分へ移管できます。</div>
        // <div class={'url-text'}>        データ参照元URL：        </div>        <div
        // class={'url'}>
        // https://www.fsa.go.jp/policy/nisa2/about/nisa2024/index.html        </div>
        // <h3 class={'title'}>  資産が122万円を超えている場合 </h3>        <img src="
        // https://media.vwcity.net/wp-content/uploads/2022/07/pat-whelen-MIGILwnvEh0-unsplash.jpg"
        // />        <div>
        // 先述しましたが、一般NISAでは、非課税対象終了時の資産を移管する場合、制限なく全額移管できます。新NISAにおいてもロールオーバーの制限は同じ扱いのようです。新NISAの非課税投資枠が122万円を超えていたとしても、時価ベースにより全額移管できます。<br/>
        // <br/>
        // ただし、例外として一定のレバレッジ投資信託や監理銘柄及び整理銘柄など上場廃止に関連する銘柄については、ロールオーバーの対象外となります。
        // </div>        <h3 class={'title'}> 資産が122万円未満の場合 </h3>        <img src="
        // https://media.vwcity.net/wp-content/uploads/2022/07/tech-daily-vxTWpu14zeM-unsplash.jpg"
        // />        <div>        非課税対象資産が122万円に満たない場合は、2段階で新NISAへロールオーバーできます。<br/>
        // <br/>
        // たとえば、2023年までに一般NISA投資枠内の120万円あった場合は、2024年から新NISAへ2つの部分に分けて振り分けられます。120万円のうちの102万円分が新NISAの2階部分（年間最大102万円）に非課税対象として移管されます。<br/>
        // <br/>
        // 120万円から102万円を差し引いた残りの18万円については、1階部分（年間最大20万円）に非課税対象として移管されるため、1階部分の残り非課税対象枠が18万円を差し引いて2万円になる仕組みです。<br/>
        // </div>        <br/>        <div>            <span> share:             <img
        // src={'./svg/icon_fb.svg'} class={'svg-img'}/>             <img
        // src={'./svg/icon_line.svg'} class={'svg-img'}/>             <img
        // src={'./svg/icon_tw.svg'} class={'svg-img'}/>             </span>
        // </div>     </div>     </div>
    );
}

export default Detail;
