import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({video : {id:{videoId}, snippet}}) => {
    // console.log(videoId);
  return (
    <Card sx={{width:{md:'320px', xs:'100%', sm:'358px'}, boxShadow:'none', borderRadius:'none' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:{xs:'100%', sm:'358px', md:'320px'}, height:180}}

            />
            <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
                {/* <Link to={videoId?`/video/${videoId}` : demoVideoUrl}> */}
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                {/* </Link> */}
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channeltitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard