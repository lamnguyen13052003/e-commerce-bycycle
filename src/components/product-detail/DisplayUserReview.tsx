import {Avatar, Box, Grid, Stack} from "@mui/material";
import {green, grey} from "@mui/material/colors";
import React from "react";
import Typography from "@mui/material/Typography";
import amber from "@mui/material/colors/amber";
import lightBlue from "@mui/material/colors/lightBlue";
import blue from "@mui/material/colors/blue";
import Rating from "@mui/material/Rating";

export default function DisplayUserReview(){

    return(
        <>
          <Grid className={'p-2 my-3 rounded rounded-4 '} container sx={{backgroundColor: grey[200]}}>
              <Grid item xs={1}>
                  <Avatar className={'m-auto'} sx={{ backgroundColor: green[500] }}></Avatar>
              </Grid>
              <Grid item xs={3}>
                  <Stack direction={'column'} spacing={1}>
                      <Box className={'fw-bold'}>Name</Box>
                      <Box className={'fst-italic text-body-secondary'}>Email</Box>
                  </Stack>
              </Grid>
              <Grid className={'d-flex justify-content-end '} item >
                  <Stack direction={'column'} >
                      <Box><Rating name="read-only" value={2} readOnly /></Box>
                      <Box className={'text-body-secondary'}>Date</Box>
                  </Stack>
              </Grid>
              <Grid className={'p-2 rounded rounded-3'} item xs={12} sx={{backgroundColor: grey[50]}}>
                  <Typography>
                      Content
                  </Typography>
              </Grid>

          </Grid>
        </>
    )

}
