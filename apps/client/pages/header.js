import React from 'react'
import style from './header.module.scss';

const Header = () => {
    return (
        <header className={style['header']}>
            <div className='grid grid-cols-4 gap-4'>
                <div className={style['header-icon']}>
                    <a target='_blank' href='https://vwcity.net/'>
                        <img
                            src='/icon/home_icon.png'
                            className={style['header-icon-img']}
                            alt='React'/>
                        ホーム
                    </a>
                    <a target='_blank' href='https://vwcity.net/tenants'>
                        <img
                            src='/icon/street_icon.png'
                            className={style['header-icon-img']}
                            alt='React'/>
                        金融街
                    </a>
                    <a target='_blank' href='https://vwcity.net/bulletin_boards'>
                        <img
                            src='/icon/board_icon.png'
                            className={style['header-icon-img']}
                            alt='React'/>
                        コミュニティ
                    </a>
                    <img
                        src='/icon/library_icon.png'
                        className={style['header-icon-img']}
                        alt='React'/>
                    Library
                </div>
                {/* 後で修正が必要
          <Link to='/company' className='header_menu_icon'>
           <img src={street} className='App-logo' alt='React' />
            <div className='aa'> aaaa</div>
          </Link> */
                }
                {/* <Link to='/company' className='header_menu_icon'>
            <img src={board} className='App-logo' alt='React' />
          </Link>
          <Link to='/company' className='header_menu_icon'>
            <img src={library} className='App-logo' alt='React' />
          </Link>
          <Link to='/company' className='header_menu_icon'>
            <img src={login} className='App-logo' alt='React' />
          </Link>*/
                }
            </div>
        </header>
    );
}

export default Header;
