import {Avatar, Box, Grid, IconButton, Stack, TextField, Tooltip} from "@mui/material";
import {green, grey, pink} from "@mui/material/colors";
import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import {ArrowOutward, Delete, Edit} from "@mui/icons-material";
import {ReviewProductType} from "../../types/reviewProduct.type";
import {formatDateTimeVN} from "../../utils/Formatter";
import HoverRating from "../hover-rating";
import {ObjectId} from "mongodb";


export default function DisplayUserReview(props: {review: ReviewProductType, userId: ObjectId }){

    const [clickIconEdit, setClickIconEdit] = React.useState(false)
    const handlerSubmitClick = () => {
        setClickIconEdit(false)
    }

    return(
        <>
          <Grid className={'p-2 my-3 rounded rounded-4 '} container sx={{backgroundColor: grey[200]}}>
              <Grid item xs={1}>
                  <Avatar alt={props.review.name} src={props.review.arlAvatar} className={'m-auto'} sx={{ backgroundColor: green[500] }}></Avatar>
              </Grid>
              <Grid item xs={4}>
                  <Stack direction={'column'} spacing={1}>
                      <Box className={'fw-bold'}>{props.review.name}</Box>
                  </Stack>
              </Grid>
              <Grid className={'d-flex justify-content-end '} item xs={6}>
                  <Stack direction={'column'} >
                      {!clickIconEdit?
                      <Box><Rating name="read-only" value={props.review.rating} readOnly /></Box>
                          :
                          <HoverRating rating={props.review.rating}/>
                      }
                      <Box className={'text-body-secondary'}>{formatDateTimeVN(new Date(props.review.date) )}</Box>
                  </Stack>
              </Grid>

              <Grid className={'p-2 rounded rounded-3'} item xs={12} sx={{backgroundColor: grey[50]}}>
                  {!clickIconEdit?
                  <Typography>{props.review.comment}</Typography>
                    :
                      <TextField
                          id={`${props.review._id}`}
                          label="Đánh giá của bạn"
                          multiline
                          defaultValue={props.review.comment}
                          rows={4}
                          variant="filled"
                          fullWidth
                      />
                  }
              </Grid>
              {props.review.user_id === props.userId &&
              <Grid className={'text-end'} item xs={12}>
                  {clickIconEdit &&
                  <Tooltip onClick={() => {handlerSubmitClick()}} className={'hiding'} title="Cập nhật" placement={'bottom'}>
                      <IconButton>
                          <ArrowOutward color={'info'}/>
                      </IconButton>
                  </Tooltip>
                  }
                  <Tooltip title="Chỉnh sửa" placement={'bottom'}>
                      <IconButton onClick={() => {setClickIconEdit(true)}}>
                          <Edit color={'primary'}/>
                      </IconButton>
                  </Tooltip>
                  <Tooltip title="Xóa" placement={'bottom'}>
                      <IconButton>
                          <Delete sx={{ color: pink[500] }}/>
                      </IconButton>
                  </Tooltip>
              </Grid>
              }
          </Grid>
        </>
    )

}
