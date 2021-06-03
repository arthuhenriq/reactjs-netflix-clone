import React from 'react';
import './FeaturedMovie.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured-Vertical'>
                <div className='featured-Horizontal'>
                    <div className='featured-Name'>
                        {item.original_name}
                    </div>
                    <div className='featured-Info'>
                        <div className='featured-Point'>{item.vote_average} pontos</div>
                        <div className='featured-Year'>
                            {firstDate.getFullYear()}
                        </div>
                        <div className='featured-Seasons'>
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className='featured-Description'>
                        {item.overview}
                    </div>
                    <div className='featured-Buttons'>
                        <a href={`/watch/${item.id}`} className="featured-WatchButton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured-MyListButton">+ Miha Lista</a>
                    </div>
                    <div className='featured-Genres'>
                        <strong>Gêneros: </strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}