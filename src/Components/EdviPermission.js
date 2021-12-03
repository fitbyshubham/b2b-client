import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdExpandMore } from 'react-icons/md';
import { MdOutlineRequestPage } from 'react-icons/md';
import logo from '../Assets/logo.png';

export default function EdviPermission() {
  const classes = useStyles(); 

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card_content}>
        <div className={classes.icon_box}>
          <div className={classes.icon_div}>
            <IoSettingsOutline size={32} color="#355aa4" />
          </div>

          <RiArrowLeftRightFill size={26} style={{ margin: '0px 20px' }} />

          <div className={classes.icon_div}>
            <img src={logo} alt="edvi logo" width="70px" height="30px" />
          </div>
        </div>

        <div style={{ margin: '20px 0px' }}>
          <Typography align="center" className={classes.text}>
            Gmail is requesting access to your
          </Typography>
          <Typography align="center" className={classes.text}>
            edvi Account
          </Typography>
        </div>

        <div style={{ margin: '20px 0px' }}>
          <Accordion variant="outlined" style={{ pading: '0px 16px' }}>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              className={classes.accordionSummary}
            >
              <Typography>View Current User's Information</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0px',
                  }}
                >
                  <MdOutlineRequestPage
                    size={18}
                    style={{ margin: '0px 2px' }}
                  />
                  <Typography>Option: Lorem Ipsum</Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0px',
                  }}
                >
                  <MdOutlineRequestPage
                    size={18}
                    style={{ margin: '0px 2px' }}
                  />
                  <Typography>Option: Lorem Ipsum</Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0px',
                  }}
                >
                  <MdOutlineRequestPage
                    size={18}
                    style={{ margin: '0px 2px' }}
                  />
                  <Typography>Option: Lorem Ipsum</Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0px',
                  }}
                >
                  <MdOutlineRequestPage
                    size={18}
                    style={{ margin: '0px 2px' }}
                  />
                  <Typography>Option: Lorem Ipsum</Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0px',
                  }}
                >
                  <MdOutlineRequestPage
                    size={18}
                    style={{ margin: '0px 2px' }}
                  />
                  <Typography>Option: Lorem Ipsum</Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Typography
            variant="subtitle2"
            style={{ fontSize: '15px', fontWeight: 'bold' }}
          >
            Make Sure you trust Google OAuth 2.0 Playground
          </Typography>

          <Typography
            variant="subtitle2"
            style={{ fontSize: '14px', margin: '20px 0px', lineHeight: 1.2 }}
          >
            You may be sharing sensitive info with this site or app. You can
            always see or remove access in your{' '}
            <span style={{ color: '#6483e4' }}>Google Account</span>.
          </Typography>

          <Typography
            variant="subtitle2"
            style={{ fontSize: '14px', margin: '20px 0px' }}
          >
            See Google OAuth 2.0 Playground's{' '}
            <span style={{ color: '#6483e4' }}>Privacy Policy</span> and{' '}
            <span style={{ color: '#6483e4' }}>Terms and Service.</span>
          </Typography>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="outlined"
              className={classes.decline_btn}
            >
              Decline
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              disableElevation
              fullWidth
              variant="contained"
              className={classes.authorize_btn}
            >
              Authorize
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  card: {
    borderRadius: '8px',
    maxWidth: '600px',
  },
  card_content: {
    padding: '40px',
  },
  icon_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  decline_btn: {
    fontSize: '14px',
  },
  authorize_btn: {
    color: '#fff',
    fontSize: '14px',
    backgroundColor: '#568ae1',

    '&:hover': {
      backgroundColor: '#568ae1',
    },
  },
  icon_div: {
    backgroundColor: '#f2f5ff',
    padding: '15px',
    borderRadius: '4px',
  },
  accordionSummary: {
    margin: '0px',
  },
});
