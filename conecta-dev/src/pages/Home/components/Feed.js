import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
    },
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Teodoro Morato',
            username: 'TeoMorato',
            avatar: '/imagens/avatars/avatar_1.jpeg',
        },
        title: 'Criando um app do 0 utilizando React.js',
        date: 'June 16, 2021',
        description: 'Fala pessoal! Qual o framework favorito de vocês?!',
        hashtags: '#dotnet, #javascript, #react, #developer',
        image: '/imagens/posts/post9.jpeg',
    },
    {
        id: 2,
        author: {
            id: 2,
            name: 'Meiriane Dias',
            username: 'MeiDias',
            avatar: '/imagens/avatars/avatar_2.jpeg',
        },
        title: 'Criando um app do 0 utilizando React.js',
        date: 'June 16, 2021',
        description: 'Fala pessoal! Qual o framework favorito de vocês?!',
        hashtags: '#dotnet, #javascript, #react, #developer',
        image: '/imagens/posts/post9.jpeg',
    }
];

const Feed = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default Feed;