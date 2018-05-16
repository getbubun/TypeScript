class Profile{
    private firstName : string
    private lastName : string
    private gender : string
    private birthday : string
    private about : string
    private education : string []
    private languages : string []
    private interestedIn : string []
    private contactNo : number []
    private familyMembers : string []
    private facebookId : string
    private checkIns : string []
    private address : string []
    private relationshipStatus : string
    private bloodGroup : string
    private email : string []

constructor(_firstName : string, _lastName : string, _gender : string, _birthday : string, _about : string ,_education : string [] ,_languages : string [] ,_interestedIn : string [] ,_contactNo : number [] ,_familyMembers : string [] ,_facebookId : string ,_checkIns : string [] ,_address : string [] ,_relationshipStatus : string, _bloodGroup : string, _email : string [])
{
    this.firstName = _firstName
    this.lastName = _lastName
    this.gender = _gender
    this.birthday = _birthday
    this.about = _about
    this.education = _education
    this.languages = _languages
    this.interestedIn = _interestedIn
    this.contactNo = _contactNo
    this.familyMembers = _familyMembers
    this.facebookId = _facebookId
    this.checkIns = _checkIns
    this.address = _address
    this.relationshipStatus = _relationshipStatus
    this.bloodGroup = _bloodGroup
    this.email = _email
}    
getfullName =() =>{
    return this.firstName + " " + this.lastName
}

getfirstName =() =>{
    return this.firstName 
}
getlastName =() =>{
    return this.lastName 
}
getgender =() =>{
    return this.gender
}
getbirthday =() =>{
    return this.birthday
}
getabout =() =>{
    return this.about 
}
geteducation =() =>{
    return this.education 
}
getlanguages =() =>{
    return this.languages
}
getinterestedIn =() =>{
    return this.interestedIn 
}
getcontactNo =() =>{
    return this.contactNo 
}
getfamilyMembers =() =>{
    return this.familyMembers 
}
getfacebookId =() =>{
    return this.facebookId 
}
getcheckIns =() =>{
    return this.checkIns
}
getaddress =() =>{
    return this.address 
}
getrelationshipStatus =() =>{
    return this.relationshipStatus 
}
getbloodGroup =() =>{
    return this.bloodGroup
}
getemail =() =>{
    return this.email
}
}

let newProfileDetails = new Profile("Manab","Das","Male","11th Sep 1994","Lorem Ipsum",["B.Tech"],["English","Hindi","Oriya"],["Men","Women"],[999999999,8888888888],["Anirudha Das","Subasini Das","Soumya Nayak"],"www.facebbok.com/getbubun",["Delhi","Gurgaon","Shimla"],["xyz street"],"Single","B +ve",["manabdas9742@gmail.com","getbubun@gmail.com"])

class newsFeed {
    private feedId : number
    private feedTitle : string
    private feedSource : string
    private feedDescription : string
    private feedLikes: number
    private feedDislikes: number
    private comments : number

constructor(_feedId : number ,_feedTitle : string ,_feedSource : string ,_feedDescription : string ,_feedLikes: number,_feedDislikes: number,_comments : number)
{
    this.feedId = _feedId
    this.feedTitle = _feedTitle
    this.feedSource = _feedSource
    this.feedDescription = _feedSource
    this.feedDislikes = _feedDislikes
    this.feedLikes = _feedLikes
    this.comments = _comments
}
getfeedId =() =>{
    return this.feedId
}
getfeedTitle =() =>{
    return this.feedTitle
}
getfeedSource =() =>{
    return this.feedSource
}
getfeedDescription =() =>{
    return this.feedDescription
}
getfeedLikes =() =>{
    return this.feedLikes
}
getfeedDislikes =() =>{
    return this.feedDislikes
}
getfeedComments =() =>{
    return this.comments
}   
}

let feed = new newsFeed(123456,"Man On Mars","www.tesla.com","It is about human civilization on Mars",63552,803,2312)

class Friends{
    private allFriendsName : string []
    private allFriendsCount : number
    private allFriendsId : number []
    private mutualFriendsName : string []
    private mutualFriendsCount : number
    private mutualFriendsId : number []

constructor(_allFriendsName : string [],_allFriendsCount : number ,_allFriendsId : number [],_mutualFriendsName : string [],_mutualFriendsCount : number ,_mutualFriendsId : number [])
{
    this.allFriendsName = _allFriendsName
    this.allFriendsCount = _allFriendsCount
    this.allFriendsId = _allFriendsId
    this.mutualFriendsName = _mutualFriendsName
    this.mutualFriendsCount = _mutualFriendsCount
    this.mutualFriendsId = _mutualFriendsId
}
getallFriendsName =() =>{
    return this.allFriendsName
}
getallFriendsCount =() =>{
    return this.allFriendsCount
}
getallFriendsId =() =>{
    return this.allFriendsId
}
getmutualFriendsName =() =>{
    return this.mutualFriendsName
}
getmutualFriendsCount =() =>{
    return this.mutualFriendsCount
}
getmutualFriendsId =() =>{
    return this.mutualFriendsId
}
}

let allFriends = new Friends (["Kanan","Shruti","Kaant","Samantha","Gupta","Raj","Subhro","Nimai","Primesh","Rahul","Sweta","Nelson"],12,[1111,2222,3333,4444,5555,6666,7777,8888,9999,1212,2323,3434],["Gupta","Raj","Nimai","Subhro","Primesh"],5,[5555,6666,7777,8888,9999,1212])

class Chats {
    private allOnlineFriendsName : string []
    private allOnlineFriendsId : number []
    private allOnlineFriendsCount : number

constructor(_allOnlineFriendsName : string [] ,_allOnlineFriendsId : number [] ,_allOnlineFriendsCount : number)
{
    this.allOnlineFriendsName = _allOnlineFriendsName
    this.allOnlineFriendsId = _allOnlineFriendsId
    this.allOnlineFriendsCount = _allOnlineFriendsCount
}
getallOnlineFriendsName =() =>{
    return this.allOnlineFriendsName
}
getallOnlineFriendsId =() =>{
    return this.allOnlineFriendsId
}
getallOnlineFriendsCount =() =>{
    return this.allOnlineFriendsCount
}
}

let chatDetails = new Chats (["Rahul","Sweta","Nelson","Kaant","Samantha"],[1111,2222,3333,4444,5555],5)

class Socialbook{
    private profile : Profile [] 
    private feed : newsFeed []
    private friend : Friends []
    private chat : Chats []

constructor(_profile : Profile [] ,_feed : newsFeed [],_friend : Friends [] ,_chat : Chats [])
{
    this.profile = _profile
    this.feed = _feed
    this.friend = _friend
    this.chat = _chat
}
}

let fbClass = new Socialbook ( newProfileDetails , feed, allFriends, chatDetails)
console.log(fbClass)