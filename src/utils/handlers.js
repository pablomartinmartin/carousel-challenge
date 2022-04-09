import { rest } from 'msw';

export const handlers = [
    rest.get('https://qa-dubbz.com/api/v1/public/games', (req, res, ctx) => {
      return res(
        ctx.json(
            {
                "links": [
                    {
                        "rel": "self",
                        "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games"
                    },
                    {
                        "rel": "profile",
                        "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/profile/games"
                    }
                ],
                "content": [
                    {
                        "id": 1,
                        "name": "LEAGUE_OF_LEGENDS",
                        "regions": [
                            {
                                "id": 1,
                                "name": "NA1 (North America)",
                                "code": "LOL_REGION_NA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 2,
                                "name": "BR1 (Brazil)",
                                "code": "LOL_REGION_BR",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 3,
                                "name": "EUN (Europe Nordic & East)",
                                "code": "LOL_REGION_EUN",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 4,
                                "name": "EUW (Europe West)",
                                "code": "LOL_REGION_EUW",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 5,
                                "name": "LAN (Latin America North)",
                                "code": "LOL_REGION_LAN",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 6,
                                "name": "LAS (Latin America South)",
                                "code": "LOL_REGION_LAS",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 7,
                                "name": "OCE (Oceania)",
                                "code": "LOL_REGION_OCE",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 1,
                                "name": "LOL_1VS1_HOWLING_ABYSS",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "LOL_WIN_CONDITION_FIRST_BLOOD",
                                    "LOL_WIN_CONDITION_FIRST_TOWER"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 2,
                                "name": "LOL_2VS2_HOWLING_ABYSS",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "LOL_WIN_CONDITION_TWO_KILLS",
                                    "LOL_WIN_CONDITION_TWO_TOWERS"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 3,
                                "name": "LOL_5VS5_CLASSIC",
                                "teamSize": 5,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 120,
                                "winConditions": [
                                    "LOL_WIN_CONDITION_CLASSIC"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            "TOP",
                            "JUNGLE",
                            "MID",
                            "CARRY",
                            "SUPPORT"
                        ],
                        "platforms": [
                            "PC"
                        ],
                        "crossPlay": false,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/1"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/1"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "HEARTHSTONE",
                        "regions": [
                            {
                                "id": 24,
                                "name": "Americas",
                                "code": "HS_REGION_AMERICAS",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 25,
                                "name": "Europe",
                                "code": "HS_REGION_EUROPE",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 26,
                                "name": "Asia",
                                "code": "HS_REGION_ASIA",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 10,
                                "name": "HS_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BATTLEGROUNDS"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            ""
                        ],
                        "platforms": [
                            "PC"
                        ],
                        "crossPlay": false,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/2"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/2"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "FORTNITE",
                        "regions": [
                            {
                                "id": 18,
                                "name": "North America",
                                "code": "FORTNITE_REGION_NORTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 19,
                                "name": "South America",
                                "code": "FORTNITE_REGION_SOUTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 20,
                                "name": "Europe",
                                "code": "FORTNITE_REGION_EUROPE",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 21,
                                "name": "Asia",
                                "code": "FORTNITE_REGION_ASIA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 22,
                                "name": "Oceania",
                                "code": "FORTNITE_REGION_OCEANIA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 23,
                                "name": "Middle East",
                                "code": "FORTNITE_REGION_MIDDLE_EAST",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 8,
                                "name": "FORTNITE_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 9,
                                "name": "FORTNITE_2VS2",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            "IGL",
                            "FRAGGER",
                            "SUPPORT"
                        ],
                        "platforms": [
                            "PC",
                            "PS4",
                            "PS5",
                            "XBOXONE",
                            "XBOXSERIES"
                        ],
                        "crossPlay": true,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/3"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/3"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "name": "COD_VANGUARD",
                        "regions": [
                            {
                                "id": 13,
                                "name": "North America",
                                "code": "COD_VANGUARD_REGION_NORTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 14,
                                "name": "South America",
                                "code": "COD_VANGUARD_REGION_SOUTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 15,
                                "name": "Europe",
                                "code": "COD_VANGUARD_REGION_EUROPE",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 16,
                                "name": "Asia",
                                "code": "COD_VANGUARD_REGION_ASIA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 17,
                                "name": "Oceania",
                                "code": "COD_VANGUARD_REGION_OCEANIA",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 6,
                                "name": "COD_VANGUARD_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 7,
                                "name": "COD_VANGUARD_2VS2",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            "OBJECTIVE",
                            "SUPPORT",
                            "SLAYER",
                            "DEFENSIVE"
                        ],
                        "platforms": [
                            "PC",
                            "PS4",
                            "PS5",
                            "XBOXONE",
                            "XBOXSERIES"
                        ],
                        "crossPlay": true,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/4"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/4"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "name": "FIFA",
                        "regions": [
                            {
                                "id": 27,
                                "name": "North America",
                                "code": "FIFA_REGION_NORTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 28,
                                "name": "South America",
                                "code": "FIFA_REGION_SOUTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 29,
                                "name": "Europe",
                                "code": "FIFA_REGION_EUROPE",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 30,
                                "name": "Oceania",
                                "code": "FIFA_REGION_OCEANIA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 31,
                                "name": "Asia",
                                "code": "FIFA_REGION_ASIA",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 11,
                                "name": "FIFA_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BO1"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 12,
                                "name": "FIFA_2VS2",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BO1"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            ""
                        ],
                        "platforms": [
                            "PC",
                            "PS4",
                            "PS5",
                            "XBOXONE",
                            "XBOXSERIES"
                        ],
                        "crossPlay": false,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/5"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/5"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "name": "COD_WARZONE",
                        "regions": [
                            {
                                "id": 8,
                                "name": "North America",
                                "code": "COD_WARZONE_REGION_NORTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 9,
                                "name": "South America",
                                "code": "COD_WARZONE_REGION_SOUTH_AMERICA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 10,
                                "name": "Europe",
                                "code": "COD_WARZONE_REGION_EUROPE",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 11,
                                "name": "Asia",
                                "code": "COD_WARZONE_REGION_ASIA",
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 12,
                                "name": "Oceania",
                                "code": "COD_WARZONE_REGION_OCEANIA",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 4,
                                "name": "COD_WARZONE_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 5,
                                "name": "COD_WARZONE_2VS2",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 10,
                                "checkinHostMinutes": 5,
                                "checkinPlayersMinutes": 5,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "KILLRACE"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            ""
                        ],
                        "platforms": [
                            "PC",
                            "PS4",
                            "PS5",
                            "XBOXONE",
                            "XBOXSERIES"
                        ],
                        "crossPlay": true,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/6"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/6"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "name": "CSGO",
                        "regions": [
                            {
                                "id": 32,
                                "name": "North America",
                                "code": "CSGO_REGION_NORTH_AMERICA",
                                "content": [],
                                "links": []
                            }
                        ],
                        "matchTypes": [
                            {
                                "id": 13,
                                "name": "CSGO_1VS1",
                                "teamSize": 1,
                                "checkinPeriodMinutes": 5,
                                "checkinHostMinutes": 2,
                                "checkinPlayersMinutes": 3,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BO1"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": true,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 14,
                                "name": "CSGO_1VS1",
                                "teamSize": 2,
                                "checkinPeriodMinutes": 5,
                                "checkinHostMinutes": 2,
                                "checkinPlayersMinutes": 3,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BO1"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            },
                            {
                                "id": 15,
                                "name": "CSGO_5VS5",
                                "teamSize": 5,
                                "checkinPeriodMinutes": 5,
                                "checkinHostMinutes": 2,
                                "checkinPlayersMinutes": 3,
                                "resolverPeriodMinutes": 60,
                                "winConditions": [
                                    "BO1"
                                ],
                                "startCaptureSec": 30,
                                "captureIntervalSec": 5,
                                "hasMatchmaking": false,
                                "content": [],
                                "links": []
                            }
                        ],
                        "roles": [
                            ""
                        ],
                        "platforms": [
                            "PC"
                        ],
                        "crossPlay": false,
                        "included": true,
                        "content": [],
                        "links": [
                            {
                                "rel": "self",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/7"
                            },
                            {
                                "rel": "game",
                                "href": "http://shibnobi-qa-alb-dubbz-1600052128.us-east-1.elb.amazonaws.com:8080/api/v1/public/games/7"
                            }
                        ]
                    }
                ]
            }
        ),
        ctx.set('Access-Control-Allow-Origin', '*'),
      );
    }),
]