import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';



export const CoffeeCard = (props) => {
    
  const { avatarUrl, title, subtitle, description, imageUrl } = props
    return (
        <Card>
            <CardHeader
        avatar={
          <Avatar src={avatarUrl}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{height: "150px"}} image={imageUrl} />
      
          <CardContent>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Yes</Button>
            <Button size="small">No</Button>
          </CardActions>
        </Card>
      );
}
