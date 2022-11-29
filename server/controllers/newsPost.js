import express from 'express';
import mongoose from 'mongoose';

import NewsPost from '../models/newsPost';

const router = express.Router();

export const getNewsPosts = async (req, res) => {

    const { page } = req.query;

    try {
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT;

        const total = await newsPost.countDocuments( {} );
        const posts = await newsPost.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data : posts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});

    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

export const getNewsPostsBySearch = async (req, res) => {
    
}

export const createNewsPost = async (req, res) => {
    const post = req.body;

    const newNewsPost = new NewsPost( {...post, date: new Date().toISOString()});

    try {
        await newNewsPost.save();

        res.status(201).json(newNewsPost);
    } catch (error) {
        res.status(404).json( {messge: error.message });

    }

}