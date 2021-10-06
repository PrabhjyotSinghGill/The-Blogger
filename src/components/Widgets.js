import React from 'react';
import "../views/Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets(){
    return <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon"></SearchIcon>
            <input placeholder="Search" type="text"></input>
        </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
            {/*<TwitterTimelineEmbed sourceType="profile" screenName="billgates" options={{height:400}}></TwitterTimelineEmbed>*/}
            {/*<TwitterTweetEmbed tweetId={"1440440604744249348"}></TwitterTweetEmbed>*/}
            <TwitterTweetEmbed tweetId={"1440685310136897537"}></TwitterTweetEmbed>
            <TwitterShareButton/>
        </div>
    </div>
}
export default Widgets