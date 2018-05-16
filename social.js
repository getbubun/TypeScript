var Profile = /** @class */ (function () {
    function Profile(_firstName, _lastName, _gender, _birthday, _about, _education, _languages, _interestedIn, _contactNo, _familyMembers, _facebookId, _checkIns, _address, _relationshipStatus, _bloodGroup, _email) {
        var _this = this;
        this.getfullName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.getfirstName = function () {
            return _this.firstName;
        };
        this.getlastName = function () {
            return _this.lastName;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getbirthday = function () {
            return _this.birthday;
        };
        this.getabout = function () {
            return _this.about;
        };
        this.geteducation = function () {
            return _this.education;
        };
        this.getlanguages = function () {
            return _this.languages;
        };
        this.getinterestedIn = function () {
            return _this.interestedIn;
        };
        this.getcontactNo = function () {
            return _this.contactNo;
        };
        this.getfamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getfacebookId = function () {
            return _this.facebookId;
        };
        this.getcheckIns = function () {
            return _this.checkIns;
        };
        this.getaddress = function () {
            return _this.address;
        };
        this.getrelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getbloodGroup = function () {
            return _this.bloodGroup;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.gender = _gender;
        this.birthday = _birthday;
        this.about = _about;
        this.education = _education;
        this.languages = _languages;
        this.interestedIn = _interestedIn;
        this.contactNo = _contactNo;
        this.familyMembers = _familyMembers;
        this.facebookId = _facebookId;
        this.checkIns = _checkIns;
        this.address = _address;
        this.relationshipStatus = _relationshipStatus;
        this.bloodGroup = _bloodGroup;
        this.email = _email;
    }
    return Profile;
}());
var newProfileDetails = new Profile("Manab", "Das", "Male", "11th Sep 1994", "Lorem Ipsum", ["B.Tech"], ["English", "Hindi", "Oriya"], ["Men", "Women"], [999999999, 8888888888], ["Anirudha Das", "Subasini Das", "Soumya Nayak"], "www.facebbok.com/getbubun", ["Delhi", "Gurgaon", "Shimla"], ["xyz street"], "Single", "B +ve", ["manabdas9742@gmail.com", "getbubun@gmail.com"]);
var newsFeed = /** @class */ (function () {
    function newsFeed(_feedId, _feedTitle, _feedSource, _feedDescription, _feedLikes, _feedDislikes, _comments) {
        var _this = this;
        this.getfeedId = function () {
            return _this.feedId;
        };
        this.getfeedTitle = function () {
            return _this.feedTitle;
        };
        this.getfeedSource = function () {
            return _this.feedSource;
        };
        this.getfeedDescription = function () {
            return _this.feedDescription;
        };
        this.getfeedLikes = function () {
            return _this.feedLikes;
        };
        this.getfeedDislikes = function () {
            return _this.feedDislikes;
        };
        this.getfeedComments = function () {
            return _this.comments;
        };
        this.feedId = _feedId;
        this.feedTitle = _feedTitle;
        this.feedSource = _feedSource;
        this.feedDescription = _feedSource;
        this.feedDislikes = _feedDislikes;
        this.feedLikes = _feedLikes;
        this.comments = _comments;
    }
    return newsFeed;
}());
var feed = new newsFeed(123456, "Man On Mars", "www.tesla.com", "It is about human civilization on Mars", 63552, 803, 2312);
var Friends = /** @class */ (function () {
    function Friends(_allFriendsName, _allFriendsCount, _allFriendsId, _mutualFriendsName, _mutualFriendsCount, _mutualFriendsId) {
        var _this = this;
        this.getallFriendsName = function () {
            return _this.allFriendsName;
        };
        this.getallFriendsCount = function () {
            return _this.allFriendsCount;
        };
        this.getallFriendsId = function () {
            return _this.allFriendsId;
        };
        this.getmutualFriendsName = function () {
            return _this.mutualFriendsName;
        };
        this.getmutualFriendsCount = function () {
            return _this.mutualFriendsCount;
        };
        this.getmutualFriendsId = function () {
            return _this.mutualFriendsId;
        };
        this.allFriendsName = _allFriendsName;
        this.allFriendsCount = _allFriendsCount;
        this.allFriendsId = _allFriendsId;
        this.mutualFriendsName = _mutualFriendsName;
        this.mutualFriendsCount = _mutualFriendsCount;
        this.mutualFriendsId = _mutualFriendsId;
    }
    return Friends;
}());
var allFriends = new Friends(["Kanan", "Shruti", "Kaant", "Samantha", "Gupta", "Raj", "Subhro", "Nimai", "Primesh", "Rahul", "Sweta", "Nelson"], 12, [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 1212, 2323, 3434], ["Gupta", "Raj", "Nimai", "Subhro", "Primesh"], 5, [5555, 6666, 7777, 8888, 9999, 1212]);
var Chats = /** @class */ (function () {
    function Chats(_allOnlineFriendsName, _allOnlineFriendsId, _allOnlineFriendsCount) {
        var _this = this;
        this.getallOnlineFriendsName = function () {
            return _this.allOnlineFriendsName;
        };
        this.getallOnlineFriendsId = function () {
            return _this.allOnlineFriendsId;
        };
        this.getallOnlineFriendsCount = function () {
            return _this.allOnlineFriendsCount;
        };
        this.allOnlineFriendsName = _allOnlineFriendsName;
        this.allOnlineFriendsId = _allOnlineFriendsId;
        this.allOnlineFriendsCount = _allOnlineFriendsCount;
    }
    return Chats;
}());
var chatDetails = new Chats(["Rahul", "Sweta", "Nelson", "Kaant", "Samantha"], [1111, 2222, 3333, 4444, 5555], 5);
var Socialbook = /** @class */ (function () {
    function Socialbook(_profile, _feed, _friend, _chat) {
        this.profile = _profile;
        this.feed = _feed;
        this.friend = _friend;
        this.chat = _chat;
    }
    return Socialbook;
}());
var fbClass = new Socialbook(newProfileDetails, feed, allFriends, chatDetails);
console.log(fbClass);
