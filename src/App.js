import drawers from './images/drawers.jpg';
import michelle from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';

import './App.scss';
import { useState } from 'react';

function App() {
  const [btnState, setBtnState] = useState(false);
  function handleBtnClick() {
    setBtnState(btnState => !btnState);
    // console.log(btnState);
  }

  let toggleClassuinfo = btnState ? 'showuf' : 'hideuf';
  let toggleClassSC = btnState ? 'showsc' : 'hidesc';

  return (
    <article className='article-prv-card'>
      <img className='article-prv-card-img' src={drawers} alt='' />
      <section className='apv-card-info'>
        <section className='apv-card-info-summary'>
          <summary>Shift the overall look and feel by adding these wonderful touches to furniture in your home</summary>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        </section>
        <section className={`apv-card-info-user ${toggleClassuinfo}`}>
          <div className='user-pic'>
            <img src={michelle } alt=''/>
          </div>
          <div className='user-name'>
            <summary>Michelle Appleton</summary>
            <p>28 Jun 2020</p>
          </div>
          <div className='share'>
            <img onClick={handleBtnClick} src={share } alt=''/>
          </div>
        </section>
        <section className={`share-card ${toggleClassSC}`}>
            <div className='sc-tag'>
              <summary>Share</summary>
            </div>
            <div className='sc-social-icons'>
              <img src={facebook} alt='' />
              <img src={twitter} alt='' />
              <img src={pinterest} alt=''/>
            </div>
            <div className='share'>
              <img onClick={handleBtnClick} src={share } alt=''/>
            </div>
        </section>
      </section>
    </article>
  );
}

export default App;
