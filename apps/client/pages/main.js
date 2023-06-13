import React, {useState, useEffect} from 'react';
import Top from './title/top'
import Ranking from './title/ranking'
import Categories from './title/categories'
import Keyword from './keyword/keyword'
import style from './main.module.scss';

const Main = () => {
    const [tab, setTab] = useState('top');
    const [keywordtab, setKeywordtab] = useState('');
    const [ViewSubTitle, setViewSubTitle] = useState('');

    const iRunOnlyOnce = () => {
        setViewSubTitle(<Top setViewSubTitle={setViewSubTitle}/>);
    };
    useEffect(iRunOnlyOnce, []);

    return (
        <div className={style['top-body']}>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 top-menu col-shadow ...">
                    <div className={style['top-title']}>
                        <div
                            className = {`btn ${tab === 'top' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(<Top setViewSubTitle={setViewSubTitle}/>);
                                setTab('top');
                                setKeywordtab('');
                            }}>
                            <div className={style['top-title-font']}>トップ</div>
                        </div>
                        <div
                            className = {`btn ${tab === 'ranking' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                 <Ranking setViewSubTitle={setViewSubTitle}/> 
                                );
                                setTab('ranking');
                                setKeywordtab('');
                            }}>
                            <div className = {style['top-title-font']}>ランキング</div>
                        </div>

                        <span className = {`btn ${tab === 'attention' ? 'active' : ''}`}>
                            <div className={'dropdown'}>
                                <div className={style['top-title-font']}>注目の投資</div>
                                <div class={'menu'}>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                               <Categories categories="100" title="事業型ファンド" setViewSubTitle={setViewSubTitle}/> 
                                            );
                                            setTab('attention');
                                            setKeywordtab('');
                                        }}>事業型ファンド</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                              <Categories categories="101" title="不動産クラウドファンディング" setViewSubTitle={setViewSubTitle}/>
                                            );
                                            setTab('attention');
                                            setKeywordtab('');
                                        }}>不動産クラウドファンディング</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                  <Categories categories="102" title="ソーシャルレンディング" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('attention');
                                            setKeywordtab('');
                                        }}>ソーシャルレンディング</div>
                                </div>
                            </div>
                        </span>

                        <span className = {`btn ${tab === 'default' ? 'active' : ''}`}>
                            <div className={'dropdown'}>
                                <div className={style['top-title-font']}>投資の基本</div>
                                <div class={'menu'}>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="103" title="株式投資" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('default');
                                            setKeywordtab('');
                                        }}>株式投資</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="104" title="投資信託" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('default');
                                            setKeywordtab('');
                                        }}>投資信託</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="105" title="不動産投資" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('default');
                                            setKeywordtab('');
                                        }}>不動産投資</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="106" title="FX" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('default');
                                            setKeywordtab('');
                                        }}>FX</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="107" title="初心者向け" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('default');
                                            setKeywordtab('');
                                        }}>初心者向け</div>
                                </div>
                            </div>
                        </span>

                        <span className = {`btn ${tab === 'blockchain' ? 'active' : ''}`}>
                            <div className={'dropdown'}>
                                <div className={style['top-title-font']}>ブロックチェーン</div>
                                <div class={'menu'}>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="108" title="ブロックチェーン" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>ブロックチェーン</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="109" title="仮想通貨" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>仮想通貨</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="110" title="NFT" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>NFT</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="111" title="セキュリティトークン" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>セキュリティトークン</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="112" title="スマートコントラクト" setViewSubTitle={setViewSubTitle}/>
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>スマートコントラクト</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="113" title="Web3" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>Web3</div>
                                    <div
                                        class={'menu-list'}
                                        onClick={() => {
                                            setViewSubTitle(
                                                 <Categories categories="114" title="メタバース" setViewSubTitle={setViewSubTitle}/>  
                                            );
                                            setTab('blockchain');
                                            setKeywordtab('');
                                        }}>メタバース</div>
                                </div>
                            </div>
                        </span>
                    </div>

                    <div className={style['top-keyword-item']}>
                        <div className={style['top-keyword-title']}>注目のキーワード</div>
                        <span
                            className = {`top-keyword ${keywordtab === 'virtual' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                  <Keyword keyword="仮想通貨" setViewSubTitle={setViewSubTitle}/>  
                                );
                                setKeywordtab('virtual');
                            }}>
                            #仮想通貨</span>
                        <span
                            className = {`top-keyword ${keywordtab === 'cryptographic' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                  <Keyword keyword="暗号資産" setViewSubTitle={setViewSubTitle}/>  
                                );
                                setKeywordtab('cryptographic');
                            }}>
                            #暗号資産</span>
                        <span
                            className = {`top-keyword ${keywordtab === 'account' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                  <Keyword keyword="口座開設" setViewSubTitle={setViewSubTitle}/>  
                                );
                                setKeywordtab('account');
                            }}>
                            #口座開設</span>
                        <span
                            className = {`top-keyword ${keywordtab === 'smart' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                     <Keyword keyword="スマートコントラクト" setViewSubTitle={setViewSubTitle}/>  
                                );
                                setKeywordtab('smart');
                            }}>
                            #スマートコントラクト</span>
                        <span
                            className = {`top-keyword ${keywordtab === 'blockchain' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                   <Keyword keyword="ブロックチェーン" setViewSubTitle={setViewSubTitle}/>  
                                );
                                setKeywordtab('blockchain');
                            }}>
                            #ブロックチェーン</span>
                        <span
                            className = {`top-keyword ${keywordtab === 'metavers' ? 'active' : ''}`}
                            onClick={() => {
                                setViewSubTitle(
                                  <Keyword keyword="メタバース" setViewSubTitle={setViewSubTitle}/>   
                                );
                                setKeywordtab('metavers');
                            }}>
                            #メタバース</span>
                    </div>
                    <hr className={style['top-title-line']}/>
                </div>
            </div>
            {ViewSubTitle}
        </div>
    );
}

export default Main;
