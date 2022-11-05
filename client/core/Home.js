import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicorncoin.jpg'
import {Link} from 'react-router-dom'
import auth from '../auth/auth-helper'
import ExpenseOverview from './../expense/ExpenseOverview'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding:`${theme.spacing(1.5)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 440
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#4f83cc'
    } 
  }
}))

export default function Home(){
  const classes = useStyles()
  return (
        <>
          { auth.isAuthenticated() && 
            <ExpenseOverview/> 
          } 
          { !auth.isAuthenticated() && typeof window !== "undefined" && 
            (<Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Home Page
              </Typography>
              {/* <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/> */}
              <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">"A lack of cash is commonly cited as one of the main reasons why businesses fail. Article, after article, after article highlights this. If cash flow is so significant, surely you need to do everything in your power to better manage it, so you don’t fall into the trap of having too little?
 One way you can do this is through daily expenses management so that you don’t get to the end of the month and find that expenses outstripped income.mastering cash flow
By tracking business expenses daily, you can also control costs, and see what you’re spending your money on and how much you’re spending. These daily figures become your marker to see whether you’re over or under your monthly budget. The entire process helps you become more financially aware.
Armed with this knowledge you can fix bad spending habits and make better ones.
You’ll not only save money—which has a positive impact on your bottom line—but free up cash that you can invest in other crucial business areas, e.g.,yourmarketing department. Ultimately, you improve your money management."</Typography>
              <CardContent>
                <Typography variant="body1" component="p">
                  Welcome to the MERN Expense Tracker. <Link to='/signup'>Sign up</Link> or <Link to='/signin'>sign in</Link> to get started.
                </Typography>
              </CardContent>
            </Card>)
          }
        </>
    )
}