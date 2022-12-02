import express from 'express';
import mongoose from 'mongoose';

import NewsPost from '../models/newsPost.js';

const router = express.Router();


export const getNewsPosts = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT;

        const total = await NewsPost.countDocuments( {} );
        const newsPosts = await NewsPost.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        console.log(`BACKEND@${new Date().toISOString()}>controllers: ${newsPosts} \n PAGE:${page} `);
        
        res.json({ data : newsPosts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
        
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
    
}

export const getNewsPostsBySearch = async (req, res) => {
    
}

export const getNewsPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const newsPost = await NewsPost.findById(id);
        
        res.status(200).json(newsPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNewsPost = async (req, res) => {
    const newsPost = req.body;

    const newNewsPost = new NewsPost( {...newsPost, date: new Date().toISOString()});

    try {
        await newNewsPost.save();

        res.status(201).json(newNewsPost);
    } catch (error) {
        res.status(404).json( {messge: error.message });

    }

}

export default router;