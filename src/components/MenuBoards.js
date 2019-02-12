import React from 'react';
import styled from 'styled-components'

const Menu = styled.div`
    
    background: linear-gradient(to right, #1584b1, #100142);
    
      * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 5px 0;
    }
    p {
      margin: 0 0 20px 0;
    }

    a {
      text-decoration: none;
    }


    .albums {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
    }

    .album {
      display: grid;
      grid-template-areas: "image"
                            "content";
    }

    .album__artwork {
      width: 100%;
      grid-area: image;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    .album__details {
      grid-area: content;
      color: white;
      margin: 0 auto;
      text-align: center;
    }

    .item__overlay button {
      background: none;
      border: 2px solid white;
      color: white;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      cursor: pointer;
      display: none;
    }

    .item__overlay {
      grid-area: image;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    .overlay {
      position: fixed;
      background: rgba(0, 0, 0, 0.7);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      z-index: 2;
    }


    .overlay .overlay-inner {
      background: white;
      width: 700px;
      padding: 20px;
    }
    .overlay img {
      width: 100%;
    }

    @media (min-width: 800px) {
      .album:hover .item__overlay button {
        display: block;
      }

      .overlay.open {
             display: grid;
             align-items: center;
             justify-items: center;
           }

    }
    .close {
      background: none;
      color: black;
      border: 0;
      cursor: pointer;
    }

    .header {
      //background-image: url("https://res.cloudinary.com/spottermart/image/upload/c_scale,w_1920/v1536360287/BGromanbrito_e7rvch.jpg");
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      color: white;
      padding-top: 2rem;
    }

    .header h2 {
      padding-top: 2rem;
    }
`
const MenuBoards = () => {
  return (
    <Menu>
      <header className="header">
        <h2>Digital Menu Board Projects</h2>
      </header>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">× Close</button>
          <img/>
        </div>
      </div>
      <div className="albums">
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/Richardson.jpg"/>
            <div className="album__details">
              <h2>Texadelphia Richardson</h2>
              <p className="album__artist">Vertical Menuboard and Slideshow</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667619/romanBrito/celebrityDallas.jpg"/>
            <div className="album__details">
              <h2>Celebrity Cafe, Preston Rd</h2>
              <p className="album__artist">Horizontal Menuboard</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/Moonlight.jpg"/>
            <div className="album__details">
              <h2>Texadelphia Moonlight</h2>
              <p className="album__artist">Vertical Menuboard and Slideshow</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/McAllen.jpg"/>
            <div className="album__details">
              <h2>Texadelphia McAllen</h2>
              <p className="album__artist">Horizontal Menuboard and Promo Screen</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/CelebrityArts.jpg"/>
            <div className="album__details">
              <h2>Celebrity Cafe, Arts District</h2>
              <p className="album__artist">Horizontal Menuboard</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/McAllen2.jpg"/>
            <div className="album__details">
              <h2>Texadelphia McAllen</h2>
              <p className="album__artist">Horizontal Menuboard and Promo Screen</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/GreatHills.jpg"/>
            <div className="album__details">
              <h2>Texadelphia Great Hills</h2>
              <p className="album__artist">Vertical Menuboard</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
        <div className="album">
          <img className="album__artwork"
               src="https://res.cloudinary.com/spottermart/image/upload/v1549667166/romanBrito/McAllen3.jpg"/>
            <div className="album__details">
              <h2>Texadelphia McAllen</h2>
              <p className="album__artist">Horizontal Menuboard and Promo Screen</p>
            </div>
            <div className="item__overlay">
              <button>View -></button>
            </div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuBoards;
