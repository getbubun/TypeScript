var userAccount = /** @class */ (function () {
    function userAccount(_userName, _userId, _userAge, _uploadedVideo, _likedVideo, _history, _subscription) {
        var _this = this;
        this.getuploadedVideo = function () {
            return _this.uploadedVideo;
        };
        this.getlikedVideo = function () {
            return _this.likedVideo;
        };
        this.gethistory = function () {
            return _this.history;
        };
        this.getsubscription = function () {
            return _this.subscription;
        };
        this.userName = _userName;
        this.userId = _userId;
        this.userAge = _userAge;
        this.uploadedVideo = _uploadedVideo;
        this.likedVideo = _likedVideo;
        this.history = _history;
        this.subscription = _subscription;
    }
    return userAccount;
}());
var newUser = new userAccount("John Doe", 123456, 23);
var Channel = /** @class */ (function () {
    function Channel(_channelTitle, _channelId, _channelType, _channelDescription, _subscribers, _videos) {
        var _this = this;
        this.getchannelTitle = function () {
            return _this.channelTitle;
        };
        this.getchannelId = function () {
            return _this.channelId;
        };
        this.getchannelType = function () {
            return _this.channelType;
        };
        this.getchannelDescription = function () {
            return _this.channelDescription;
        };
        this.getsubscribers = function () {
            return _this.subscribers;
        };
        this.getvideos = function () {
            return _this.getvideos;
        };
        this.channelTitle = _channelTitle;
        this.channelId = _channelId;
        this.channelType = _channelType;
        this.channelDescription = _channelDescription;
        this.subscribers = _subscribers;
        this.videos = _videos;
    }
    return Channel;
}());
var youtubeChannel = new Channel("PUBG Gaming Videos", 10101010, "Gaming", "This channel contains Funnny PUBG Videos", 51250);
var Video = /** @class */ (function () {
    function Video(_videoTitle, _videoId, _videoCategory, _videoLength, _uploadDate, _views, _likes, _dislikes, _comments, _recommendedVideos, _uploadedBy) {
        var _this = this;
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getvideoId = function () {
            return _this.videoId;
        };
        this.getvideoCategory = function () {
            return _this.videoCategory;
        };
        this.getvideoLength = function () {
            return _this.videoLength;
        };
        this.getuploadedby = function () {
            return _this.getuploadedby;
        };
        this.getuploadDate = function () {
            return _this.uploadDate;
        };
        this.getviews = function () {
            return _this.views;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        this.getrecommendedVideos = function () {
            return _this.getrecommendedVideos;
        };
        this.videoTitle = _videoTitle;
        this.videoId = _videoId;
        this.videoCategory = _videoCategory;
        this.videoLength = _videoLength;
        this.uploadedBy = _uploadedBy;
        this.uploadDate = _uploadDate;
        this.views = _views;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.comments = _comments;
        this.recommendedVideos = _recommendedVideos;
    }
    return Video;
}());
var newVideo = new Video("Funny Ways To Die in PUBG", 250123, "Funny", 10.36, "11th may", 35790, 11525, 93, "This is Awesome !");
var videoComment = /** @class */ (function () {
    function videoComment(_noOfComment, _commentDescription, _commentedBy, _commentId, _commentTime, _likes, _dislikes, _noOfReplies) {
        var _this = this;
        this.getnoOfComment = function () {
            return _this.noOfComment;
        };
        this.getcommentDescribtion = function () {
            return _this.commentDescription;
        };
        this.getcommentedBy = function () {
            return _this.commentedBy;
        };
        this.getcommentId = function () {
            return _this.commentId;
        };
        this.getcommentTime = function () {
            return _this.commentTime;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getnoOfReplies = function () {
            return _this.noOfReplies;
        };
        this.noOfComment = _noOfComment;
        this.commentDescription = _commentDescription;
        this.commentedBy = _commentedBy;
        this.commentId = _commentId;
        this.commentTime = _commentTime;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.noOfReplies = _noOfReplies;
    }
    return videoComment;
}());
var newComment1 = new videoComment(287, "Funny reactions", 99999, 12.36, 31, 1, 3);
var Reply = /** @class */ (function () {
    function Reply(_reply, _replyId, _repliedBy, _replyTime, _likes, _dislikes) {
        var _this = this;
        this.getreply = function () {
            return _this.reply;
        };
        this.getreplyId = function () {
            return _this.replyId;
        };
        this.getrepliedBy = function () {
            return _this.repliedBy;
        };
        this.getreplyTime = function () {
            return _this.replyTime;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.reply = _reply;
        this.replyId = _replyId;
        this.repliedBy = _repliedBy;
        this.replyTime = _replyTime;
        this.likes = _likes;
        this.dislikes = _dislikes;
    }
    return Reply;
}());
var newReply = new Reply("This game is awesome", 1223344, 11.32, 33, 0);
var YouTube = /** @class */ (function () {
    function YouTube(_video, _account, _channel) {
        var _this = this;
        this.getAllVideos = function () {
            return _this.video;
        };
        this.getAllAccounts = function () {
            return _this.account;
        };
        this.getAllChannel = function () {
            return _this.channel;
        };
        this.video = _video;
        this.account = _account;
        this.channel = _channel;
    }
    return YouTube;
}());
var youtubeProperties = new YouTube(newVideo, newUser, youtubeChannel);
console.log(youtubeProperties);
