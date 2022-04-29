export const chainMap = {
    "cosmoshub-4":{
        name:'Cosmos',
        rpc:'https://anyplace-cors.herokuapp.com/https://rpc.cosmos.network:443',
        symbol:'ATOM',
        denom: "uatom",
        exponent: 6,
        min_tx_fee: "800",
        gas:80000,
        prefix:"cosmos"
    },
    "osmosis-1":{
        name:'Osmosis',
        rpc:'https://osmosis.validator.network/',
        symbol:'OSMO',
        denom: "uosmo",
        exponent: 6,
        min_tx_fee: "800",
        gas:140000,
        prefix:"osmo"
    },
    "juno-1":{
        name:'Juno',
        rpc:'https://rpc-juno.itastakers.com',
        symbol:'JUNO',
        denom: "ujuno",
        exponent: 6,
        min_tx_fee: "3000",
        gas:80000,
        prefix:"juno"
    },
    "akashnet-2":{
        name:'Akash Network',
        rpc:'https://rpc.akash.forbole.com:443',
        symbol:'AKT',
        denom: "uakt",
        exponent: 6,
        min_tx_fee: "8000",
        gas:120000,
        prefix:"akash"

    },
    "stargaze-1":{
        name:'Stargaze',
        rpc:'https://rpc.stargaze-apis.com/',
        symbol:'STARS',
        denom: "ustars",
        exponent: 6,
        min_tx_fee: "800",
        gas:80000,
        prefix:"stars"

    },
    "chihuahua-1":{
        name:'Chihuahua',
        chain_status:'experiemental',
        rpc:'https://rpc.chihuahua.wtf/',
        rest:'https://api.chihuahua.wtf/',
        symbol:'HUAHUA',
        denom: "uhuahua",
        exponent: 6,
        min_tx_fee: "2000",
        gas:80000,
        prefix:"chihuahua",
        coin_type:118
    },
    "columbus-5":{
        name:'Terra',
        rpc:'https://rpc-columbus.keplr.app',
        symbol:'LUNA',
        denom: "uluna",
        exponent: 6,
        min_tx_fee: "5000",
        gas:80000,
        prefix:"terra"
    },
    "crescent-1":{
        name:'Crescent',
        chain_status:'experiemental',
        rpc:'https://anyplace-cors.herokuapp.com/http://45.76.97.48:26657/',
        rest:'https://lcd-crescent-app.cosmostation.io/',
        symbol:'CRE',
        denom: "ucre",
        exponent: 6,
        min_tx_fee: "0",
        gas:80000,
        prefix:"cre",
        coin_type:118

    }
}