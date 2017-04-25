import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default class Index extends Component {
    static async getInitialProps () {
        const res = await fetch('http://www.omdbapi.com/?s=batman');
        const data = await res.json();

        console.log(`已成功获取${data.Search.length}条电影数据。`);

        return {
            movies: data.Search
        };
    };

    render () {
        return (
            <Layout>
                <h1>蝙蝠侠系列电影</h1>
                <ul>
                    {this.props.movies.map((movie) => (
                        <li key={movie.imdbID}>
                            <Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
                                <a>{movie.Title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        )
    };
};