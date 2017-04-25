import React, { Component } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

export default class Post extends Component {
    static async getInitialProps ({ query }) {
        const { id } = query;
        const res = await fetch(`http://www.omdbapi.com/?i=${id}`);
        const movie = await res.json();

        console.log(`已成功获取电影: ${movie.Title}`);

        return { movie };
    }


    render () {
        const  { movie } = this.props;
        return (
            <Layout>
                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
                <img src={movie.Poster}/>
            </Layout>
        );
    }
}