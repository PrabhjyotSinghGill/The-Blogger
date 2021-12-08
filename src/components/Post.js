import React from "react";
import "../views/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Prabhjyot Singh Gill{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>
                @Prabhjyot.Singh.Gill
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>River Channel</p>
          </div>
        </div>
        <img src="iph.jpg" alt=""></img>
        <div className="post__description">
          <p>
            A river is a natural flowing watercourse, usually freshwater,
            flowing towards an ocean, sea, lake or another river. In some cases,
            a river flows into the ground and becomes dry at the end of its
            course without reaching another body of water. Small rivers can be
            referred to using names such as stream, creek, brook, rivulet, and
            rill. There are no official definitions for the generic term river
            as applied to geographic features,[1] although in some countries or
            communities a stream is defined by its size. Many names for small
            rivers are specific to geographic location; examples are "run" in
            some parts of the United States, "burn" in Scotland and northeast
            England, and "beck" in northern England. Sometimes a river is
            defined as being larger than a creek,[2] but not always: the
            language is vague.[1] Melting toe of Athabasca Glacier, Jasper
            National Park, Alberta, Canada Rivers are part of the hydrological
            cycle. Water generally collects in a river from precipitation
            through a drainage basin from surface runoff and other sources such
            as groundwater recharge, springs, and the release of stored water in
            natural ice and snowpacks (e.g., from glaciers).
          </p>
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
export default Post;
