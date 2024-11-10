import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  TextField,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  // const [data,setData] = useState([])
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const loggedInUserName = useSelector((state) => state.user.firstName);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [popup, setPopUp] = useState(false);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const primaryDark = palette.primary.dark;

  const patchLike = async () => {
    try {
      const response = await fetch(
        `https://matrimony-backend.onrender.com/posts/${postId}/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: loggedInUserId }),
        }
      );
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    } catch (error) {
      console.log(error);
    }
  };

  const patchComment = async (text, loggedInUserName) => {
    try {
      const response = await fetch(
        `https://matrimony-backend.onrender.com/posts/${postId}/comment`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: loggedInUserId,
            text: text,
            userName: loggedInUserName,
          }),
        }
      );
      const updatedPost = await response.json();
      console.log(updatedPost);
      dispatch(setPost({ post: updatedPost }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://matrimony-backend.onrender.com/posts/${postId}/delete`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      window.location.reload();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePopUp = () => {
    setPopUp(true);
  };

  const handleYes = () => {
    handleDelete();
    setPopUp(false);
  };

  const handleNo = () => {
    setPopUp(false);
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`https://matrimony-backend.onrender.com/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>

            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          {/* <ShareOutlined /> */}
          {loggedInUserId == postUserId && (
            <DeleteIcon sx={{ color: primaryDark }} onClick={handlePopUp} />
          )}
        </IconButton>
        <Dialog open={popup} onClose={() => setPopUp(false)}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to Delete this post?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleYes} color="primary" autoFocus>
              Yes
            </Button>
            <Button onClick={handleNo} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment) => (
            <Box key={`${name}-${comment.userId}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment.userName}-{comment.text}
              </Typography>
            </Box>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target[0].value);
              patchComment(e.target[0].value, loggedInUserName);
              e.target[0].value = "";
            }}
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </form>
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
