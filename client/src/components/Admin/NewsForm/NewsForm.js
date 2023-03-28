import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles";
import { TextField, Button, Paper, Typography, Grid, Input, InputAdornment } from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import NewsPosts from "../../NewsPosts/NewsPosts";
import { createNewsPost, getNewsPosts } from "../../../actions/newsPosts";
import {useLocation} from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

/**
 * 
 * Without additional information on what the error message is, it is difficult to determine the exact cause of the error. However, here are a few potential issues that could cause an error:

useStyles hook: The useStyles hook is not provided in the code snippet, so it is possible that the error is caused by a missing import or implementation of this hook.

createNewsPost or getNewsPosts action: The createNewsPost and getNewsPosts actions are not defined in the code snippet, so it is possible that the error is caused by a missing import or implementation of these actions.

InputAdornment: The InputAdornment component in the code snippet is not wrapped in a FormControl component, which is necessary for it to function properly.

Input component: The Input component in the code snippet has an incorrect startAdornment prop. The startAdornment prop should be an object that contains a component key that maps to the InputAdornment component.

These are just a few potential issues that could cause an error in the code snippet. It would be helpful to have more information on the specific error message in order to identify the exact cause of the error.
 */

const NewsForm = () => {
    const classes = useStyles();

    const query = useQuery();
    const page = query.get('page') || 1;

    const [newsPostData, setNewsPostData] = useState({ title: '', information: '', date: Date});
    const [currentId, setCurrentId] = useState(0);
    const newsPost = useSelector((state) => (currentId ? state.newsPosts.find((information) => information._id === currentId) : null));
    const history = useHistory();
    //handle button change for adding a new newsform

    const dispatch = useDispatch();
    dispatch(getNewsPosts(1));

    const clear = () => {
        setCurrentId(0);
        setNewsPostData({ title: '', information: '', date: Date });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createNewsPost({ ...newsPostData, date: new Date() }, history));
            console.log(`Newspost created at ${newsPostData.date}, form information: ${newsPostData}`);
            clear();
          } else {
            //TODO implement an updateNewsPost method
            //dispatch(updateNewsPost(currentId, { ...postData}));
            clear();
        }
    }

    return (
        <Paper className={[classes.newsPostPaper, classes.paper]}>
            <Typography variant={'h4'} align={'center'} className={['']}>Manage News Posts</Typography>
            <Grid container direction='column' spacing={2}>
                <Grid item lg={6}>
                    <NewsPosts 
                                setCurrentId={setCurrentId} 
                                class='posts' 
                                postStyleOptions={{
                                    body: 'newsbar-post-body font-consolas',
                                    subtitle: 'newsbar-post-subtitle font-consolas',
                                    title: 'newsbar-post-title swiss'
                                }}
                            />
                </Grid>

                <Grid item lg={6} className={`news-post-creation-form-outer`}>
                    <Paper className={`news-post-creation-form-inner`}>

                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                            <Typography variant='h6'>{currentId ? `Editing News Post "${newsPost.title}" from ${newsPost.date}` :  'Creating a News Post'}</Typography>
                            <TextField name="title" variant="outlined" label="Title"  fullWidth value={newsPostData.title} onChange={(e) => setNewsPostData({...newsPostData, title: e.target.value })} />
                            <TextField name="information" variant="outlined" label="Information" fullWidth  value={newsPostData.information} onChange={(e) => setNewsPostData({...newsPostData, information: e.target.value})}/>
                            
                            <Input
                                id="input-for-date"
                                name="date"
                                startAdornment={
                                    <InputAdornment>
                                        <Typography variant="body">Date: </Typography>
                                    </InputAdornment>
                                }
                                variant="filled"
                                fullWidth
                                defaultValue={currentId ? newsPostData.date : new Date()}
                                contentEditable={false}
                                value={newsPostData.date}
                            />
                            
                        </form>

                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default NewsForm;