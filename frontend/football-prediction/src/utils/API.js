matches = [
    {
        id:1560263,
        away_id: 188,
        away_name: "Coban Imperial",
        home_id: 189,
        home_name: "Antigua Guatemala",
        league_id: 0,
        league: {
            country_id: null,
            name: null,
            id: null
        },
        competition_id: 55,
        competition: {
            name: "Liga Nacional",
            id: 55
        },
        date: "2022-10-23",
        time: "01:00:00",
        round: "16",
        location: "Estadio Pensativo"
    },
    {
        id:1560264,
        away_id: 188,
        away_name: "Coban Imperial",
        home_id: 189,
        home_name: "Antigua Guatemala",
        league_id: 0,
        league: {
            country_id: null,
            name: null,
            id: null
        },
        competition_id: 55,
        competition: {
            name: "Liga Nacional",
            id: 55
        },
        date: "2022-10-23",
        time: "01:00:00",
        round: "16",
        location: "Estadio Pensativo"
    },
    {
        id:1560265,
        away_id: 188,
        away_name: "Coban Imperial",
        home_id: 189,
        home_name: "Antigua Guatemala",
        league_id: 0,
        league: {
            country_id: null,
            name: null,
            id: null
        },
        competition_id: 55,
        competition: {
            name: "Liga Nacional",
            id: 55
        },
        date: "2022-10-23",
        time: "01:00:00",
        round: "16",
        location: "Estadio Pensativo"
    },
    {
        id:1560266,
        away_id: 188,
        away_name: "Coban Imperial",
        home_id: 189,
        home_name: "Antigua Guatemala",
        league_id: 0,
        league: {
            country_id: null,
            name: null,
            id: null
        },
        competition_id: 55,
        competition: {
            name: "Liga Nacional",
            id: 55
        },
        date: "2022-10-23",
        time: "01:00:00",
        round: "16",
        location: "Estadio Pensativo"
    }
]

users = [
    {
        id: 123,
        username: "ahmed",
        email: "anabilsalah@gmail.com",
        password: "123",
        bets: [
            321
        ]
    }
]

bets = [
    {
        id: 321,
        userid: 123,
        matchid: 1560263,
        prediction: "home",
        points: 1232
    }
]

function getMatches() {
    return matches;
}

function getUsers() {
    return users;
}

function getBets() {
    return bets;
}


export default getMatches;
