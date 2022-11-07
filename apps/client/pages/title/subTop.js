import style from './subTop.module.scss';
import Detail from './detail';
import Categories from './categories';

const SubTop = (props) => {
    const obj = props
        .obj.slice(0, 2);
    const ViewSubTitle = obj.map(movie => {
        const result = [];
        for (let num = 0; num < movie.keyword.length; num++) {
            result.push(
                <span className={style['top-sub-keyword']}>
                    {movie.keyword[num]}
                </span>
            );
        }
        if (movie.triangle === "注目の投資") {
            triangle = <div className={style['top-sub-triangle-r']}></div>
        } else if (movie.triangle === "投資の基本") {
            triangle = <div className={style['top-sub-triangle-y']}></div>
        } else if (movie.triangle === "ブロックチェーン") {
            triangle = <div className={style['top-sub-triangle-b']}></div>
        }
        return (
            <div
                className={style['top-sub-list']}
                onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                <div className={style['top-sub-triangle-img']}>
                    <div className={style['top-sub-triangle-text']}>{movie.triangle}</div>
                    {triangle}
                    <img src={movie.url} className={style['top-sub-content-img']} alt='React'/>
                </div>
                <div className={style['top-sub-content']}>
                    {movie.title.rendered}
                </div>
                <div className={style['top-sub-line']}>
                    <span className={style['top-sub-new']}>NEW</span>
                    <span className={style['top-sub-day']}>{movie.date}</span>
                    <hr/>
                    <div className={style['top-sub-keyword-align']}>
                        {result}
                    </div>
                </div>
            </div>
        )
    })

    const obj2 = props
        .obj.slice(2, 4);
    const triangle = "";
    const ViewSubTitle2 = obj2.map(movie => {
        const result = [];
        for (let num = 0; num < movie.keyword.length; num++) {
            result.push(
                <span className={style['top-sub-keyword']}>
                    {movie.keyword[num]}
                </span>
            );
        }
        if (movie.triangle === "注目の投資") {
            triangle = <div className={style['top-sub-triangle-r']}></div>
        } else if (movie.triangle === "投資の基本") {
            triangle = <div className={style['top-sub-triangle-y']}></div>
        } else if (movie.triangle === "ブロックチェーン") {
            triangle = <div className={style['top-sub-triangle-b']}></div>
        }

        return (
            <div
                className={style['top-sub-list']}
                onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                <div className={style['top-sub-triangle-img']}>
                    <div className={style['top-sub-triangle-text']}>{movie.triangle}</div>
                    {triangle}
                    <img src={movie.url} className={style['top-sub-content-img']} alt='React'/>
                    <div className={style['top-sub-content']}>
                        {movie.title.rendered}
                    </div>
                    <div className={style['top-sub-line']}>
                        <span className={style['top-sub-new']}>NEW</span>
                        <span className={style['top-sub-day']}>{movie.date}</span>
                        <hr/>
                        <div className={style['top-sub-keyword-align']}>
                            {result}
                        </div>
                    </div>

                </div>

            </div>
        )
    })

    const obj3 = props
        .obj.slice(4, 6);
    const ViewSubTitle3 = obj3.map(movie => {
        const result = [];
        for (let num = 0; num < movie.keyword.length; num++) {
            result.push(
                <span className={style['top-sub-keyword']}>
                    {movie.keyword[num]}
                </span>
            );
        }
        if (movie.triangle === "注目の投資") {
            triangle = <div className={style['top-sub-triangle-r']}></div>
        } else if (movie.triangle === "投資の基本") {
            triangle = <div className={style['top-sub-triangle-y']}></div>
        } else if (movie.triangle === "ブロックチェーン") {
            triangle = <div className={style['top-sub-triangle-b']}></div>
        }

        return (
            <div
                className={style['top-sub-list']}
                onClick={() => props.setViewSubTitle(<Detail title={movie.id}/>)}>
                <div className={style['top-sub-triangle-img']}>
                    <div className={style['top-sub-triangle-text']}>{movie.triangle}</div>
                    {triangle}
                    <img src={movie.url} className={style['top-sub-content-img']} alt='React'/>
                </div>
                <div className={style['top-sub-content']}>
                    {movie.title.rendered}
                </div>
                <div className={style['top-sub-line']}>
                    <span className={style['top-sub-new']}>NEW</span>
                    <span className={style['top-sub-day']}>{movie.date}</span>
                    <hr/>
                    <div className={style['top-sub-keyword-align']}>
                        {result}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={style['top-sub']}>
            <div className={style['top-sub-title']}>新着記事</div>

            <div className={style['top-sub-img']}>
                {ViewSubTitle}
            </div>

            <div className={style['top-sub-img']}>
                {ViewSubTitle2}
            </div>

            <div className={style['top-sub-img']}>
                {ViewSubTitle3}
            </div>
            <button
                className={style['top-sub-button']}
                onClick={() => props.setViewSubTitle(<Categories categories="all" setViewSubTitle={props.setViewSubTitle}/>)}>
                記事一覧</button>
            <div className={style['top-sub-last-line']}>
                <hr/>
            </div>
            <div className={style['top-sub']}>
                <div className={style['top-sub-title']}>ピックアップ動画
                </div>
            </div>
        </div>
    );
};

export default SubTop;
