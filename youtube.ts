class userAccount{
    private userName : string
    private userId : number
    private userAge : number
    private uploadedVideo : Video []
    private likedVideo : Video[]
    private history : Video[]
    private subscription : Channel[]


constructor(_userName : string,_userId : number, _userAge : number,_uploadedVideo? : Video[],_likedVideo? : Video[],_history?:Video[],_subscription?: Channel[])
{
    this.userName = _userName
    this.userId = _userId
    this.userAge = _userAge
    this.uploadedVideo = _uploadedVideo
    this.likedVideo = _likedVideo
    this.history = _history
    this.subscription = _subscription
}

getuploadedVideo = () => {
    return this.uploadedVideo
}
getlikedVideo =() => {
    return this.likedVideo
}
gethistory =() =>{
    return this.history
}
getsubscription =() =>{
    return this.subscription
}
}

let newUser = new userAccount("John Doe", 123456, 23)

class Channel {
    private channelTitle : string
    private channelId : number
    private channelType : string
    private channelDescription : string
    private subscribers : number
    private videos : Video []

constructor ( _channelTitle : string,_channelId : number,_channelType : string,_channelDescription : string,_subscribers : number, _videos?: Video[] )
{
    this.channelTitle = _channelTitle
    this.channelId = _channelId
    this.channelType = _channelType
    this.channelDescription = _channelDescription
    this.subscribers = _subscribers
    this.videos = _videos
}

getchannelTitle = () =>{
    return this.channelTitle
}
getchannelId = () =>{
    return this.channelId
}
getchannelType = () =>{
    return this.channelType
}
getchannelDescription = () =>{
    return this.channelDescription
}
getsubscribers = () =>{
    return this.subscribers
}
getvideos = () =>{
    return this.getvideos
}
}

let youtubeChannel = new Channel ("PUBG Gaming Videos",10101010,"Gaming","This channel contains Funnny PUBG Videos",51250)

class Video{
    private videoTitle : string
    private videoId : number
    private videoCategory : string
    private videoLength : number
    private uploadedBy : userAccount[] 
    private uploadDate : string
    private views : number
    private likes : number
    private dislikes : number
    private comments : videoComment []
    private recommendedVideos : Video []

constructor(_videoTitle : string ,_videoId : number,_videoCategory : string,_videoLength : number, _uploadDate: string,_views : number,_likes : number,_dislikes : number,_comments? : videoComment[] ,_recommendedVideos? : Video [],_uploadedBy? : userAccount[])
{
    this.videoTitle = _videoTitle
    this.videoId = _videoId
    this.videoCategory = _videoCategory
    this.videoLength = _videoLength
    this.uploadedBy = _uploadedBy
    this.uploadDate = _uploadDate
    this.views = _views
    this.likes = _likes
    this.dislikes = _dislikes
    this.comments = _comments
    this.recommendedVideos = _recommendedVideos
}

getvideoTitle =() =>{
    return this.videoTitle
}
getvideoId =() =>{
    return this.videoId
}
getvideoCategory =() =>{
    return this.videoCategory
}
getvideoLength =() =>{
    return this.videoLength
}
getuploadedby =() =>{
    return this.getuploadedby
}
getuploadDate =() =>{
    return this.uploadDate
}
getviews =() =>{
    return this.views
}
getlikes =() =>{
    return this.likes
}
getdislikes =() =>{
    return this.dislikes
}
getcomments =() =>{
    return this.comments
}
getrecommendedVideos =() =>{
    return this.getrecommendedVideos
}
}

let newVideo = new Video ("Funny Ways To Die in PUBG", 250123,"Funny", 10.36, "11th may", 35790, 11525,93,"This is Awesome !" )

class videoComment {
    private noOfComment : number
    private commentDescription : string
    private commentedBy : userAccount[]
    private commentId : number
    private commentTime : number
    private likes : number
    private dislikes : number
    private noOfReplies : number

constructor(_noOfComment : number,_commentDescription : string,_commentedBy : userAccount[],_commentId : number,_commentTime : number ,_likes : number,_dislikes : number,_noOfReplies : number)
{
    this.noOfComment = _noOfComment
    this.commentDescription = _commentDescription
    this.commentedBy = _commentedBy
    this.commentId = _commentId
    this.commentTime = _commentTime
    this.likes = _likes
    this.dislikes = _dislikes
    this.noOfReplies = _noOfReplies
}

getnoOfComment =() =>{
    return this.noOfComment
}
getcommentDescribtion =() =>{
    return this.commentDescription
}
getcommentedBy =() =>{
    return this.commentedBy
}
getcommentId =() =>{
    return this.commentId
}
getcommentTime =() =>{
    return this.commentTime
}
getlikes =() =>{
    return this.likes
}
getdislikes =() =>{
    return this.dislikes
}
getnoOfReplies =() =>{
    return this.noOfReplies
}
}

let newComment1 = new videoComment (287,"Funny reactions",99999, 12.36, 31, 1, 3)

class Reply {
    private reply : string
    private replyId: number
    private repliedBy:userAccount[]
    private replyTime: number
    private likes : number
    private dislikes : number

constructor(_reply : string,_replyId: number,_repliedBy :userAccount[], _replyTime: number,_likes : number,_dislikes : number)
{
    this.reply = _reply
    this.replyId = _replyId
    this.repliedBy = _repliedBy
    this.replyTime = _replyTime
    this.likes = _likes
    this.dislikes = _dislikes
}

getreply =() =>{
    return this.reply
}
getreplyId =() =>{
    return this.replyId
}
getrepliedBy =() =>{
    return this.repliedBy
}
getreplyTime =() =>{
    return this.replyTime
}
getlikes =() =>{
    return this.likes
}
getdislikes =() =>{
    return this.dislikes
}
}

let newReply = new Reply("This game is awesome", 1223344, 11.32, 33, 0)

class YouTube{

    private video : Video [] 
    private account : userAccount []
    private channel : Channel []
    
    constructor(_video : Video [], _account : userAccount [],_channel : Channel [])
    {
        this.video = _video;
        this.account = _account
        this.channel = _channel
    }

    getAllVideos = () => {
	    return this.video
    }
    getAllAccounts = () => {
	    return this.account
    }
    getAllChannel = () => {
	    return this.channel
    }

}
let youtubeProperties= new YouTube (newVideo, newUser, youtubeChannel)
console.log(youtubeProperties)