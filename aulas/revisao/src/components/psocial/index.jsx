import React from 'react';
import './psocial.css'

export default({url, artist, artist_url})=>
    <div className="psocial-main">
    <img className="psocial-img" src={url}  />
    <h3>{artist}</h3>
    <span><a href={artist_url}>Link do Artista</a></span>
</div>

