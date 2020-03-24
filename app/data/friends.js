//data array that will store the friends list
var friendsArray = [
    {
        name: "Larry Stevens",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgur.com%2Fr%2FWhoShouldICosplay%2FVbZqoHh&psig=AOvVaw2j5fj6abqRfC8u4Pwr5Qmk&ust=1585027920130000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCb9aLvr-gCFQAAAAAdAAAAABAD",
        scores:[
            6,
            3,
            2,
            5,
            4,
            1,
            4,
            6,
            5,
            4
        ]

    },
    {
        name: "Guy Perkins",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fwhite-cis-male&psig=AOvVaw2j5fj6abqRfC8u4Pwr5Qmk&ust=1585027920130000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCb9aLvr-gCFQAAAAAdAAAAABAI",
        scores:[
            4,
            3,
            6,
            3,
            5,
            3,
            2,
            5,
            3,
            6
        ]
    },
    {
        name: "Vladamir Putin",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.sky.com%2Fstory%2Frussias-pm-and-government-resign-as-putin-proposes-changes-to-constitution-11909256&psig=AOvVaw2RE3ddQ7znSkY5VojUKN0z&ust=1585027978957000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiivMPvr-gCFQAAAAAdAAAAABAK",
        scores:[
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        name: "Bill Clinton",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rollingstone.com%2Fculture%2Fculture-news%2Fepstein-portrait-bill-clinton-blue-dress-872203%2F&psig=AOvVaw2HqNW9Iv3ajnAk0wRjbiMG&ust=1585028034381000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC6mOLvr-gCFQAAAAAdAAAAABAD",
        scores:[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        name: "Barbara Streisand",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.last.fm%2Fmusic%2FBarbra%2BStreisand%2F%2Bimages%2Fec7d2232f26a4e76ce4ac84dc66f2045&psig=AOvVaw3GTvRzXCrZFY6HqTQMMv85&ust=1585028083482000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODK3Ybwr-gCFQAAAAAdAAAAABAD",
        scoers:[
            4,
            3,
            3,
            5,
            5,
            1,
            2,
            3,
            4,
            4
        ]
    },
    {
        name: "Kevin Costner",
        phtoto:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onthisday.com%2Fpeople%2Fkevin-costner&psig=AOvVaw0EynxIu2zVXfgFuIqTuqpz&ust=1585028155815000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC9s5nwr-gCFQAAAAAdAAAAABAD",
        scores: [
            3,
            3,
            3,
            6,
            6,
            6,
            5,
            2,
            1,
            1
        ]
    },
    {
        name: "Sammy Sosa",
        photo:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.espn.com%2Fespn%2Fpage2%2Fstory%2F_%2Fpage%2Fhill%252F091113%2FsportCat%2Fmlb&psig=AOvVaw1Ldfi-DcY9AQ00-SeZkbH4&ust=1585028188594000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj_p7Twr-gCFQAAAAAdAAAAABAD",
        scores:[
            3,
            3,
            6,
            6,
            6,
            5,
            2,
            2,
            2,
            4
        ]
    },
    {
        name: "Roseanne",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FRoseanne-Barr&psig=AOvVaw2NFKUfwO7evzmglagcRxcx&ust=1585028245973000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjG4r_wr-gCFQAAAAAdAAAAABAD",
        scores:[
            5,
            5,
            1,
            1,
            2,
            1,
            4,
            5,
            4,
            3
        ]
    },
    {
        name: "Jackie Chan",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJackie_Chan&psig=AOvVaw3aHEzqaV6UxSUVvVLgY9pK&ust=1585028275768000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDNm87wr-gCFQAAAAAdAAAAABAD",
        scores:[
            2,
            2,
            4,
            3,
            6,
            1,
            3,
            5,
            2,
            3
        ]
    },
    {
        name: "Boxer Briefington",
        photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoranews24.com%2F2013%2F03%2F22%2Fwhy-do-people-wear-underwear-on-the-heads%2F&psig=AOvVaw2jYQlApCmHzq812cI_P0yg&ust=1585028307124000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDA0OTwr-gCFQAAAAAdAAAAABAF",
        scores:[
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6
        ]
    }];
    
module.exports = friendsArray;