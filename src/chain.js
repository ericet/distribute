export const chainMap = {
    "cosmoshub-4":{
        name:'cosmos',
        rpc:'https://cosmoshub.validator.network/',
        symbol:'ATOM',
        denom: "uatom",
        exponent: 6,
        min_tx_fee: "800",
        gas:80000,
        prefix:"cosmos"
    },
    "osmosis-1":{
        name:'osmosis',
        rpc:'https://osmosis.validator.network/',
        symbol:'OSMO',
        denom: "uosmo",
        exponent: 6,
        min_tx_fee: "800",
        gas:140000,
        prefix:"osmo"
    },
    "juno-1":{
        name:'juno',
        rpc:'https://rpc-juno.itastakers.com',
        symbol:'JUNO',
        denom: "ujuno",
        exponent: 6,
        min_tx_fee: "3000",
        gas:80000,
        prefix:"juno"
    },
    "akashnet-2":{
        name:'akash-network',
        rpc:'https://rpc.akash.forbole.com:443',
        symbol:'AKT',
        denom: "uakt",
        exponent: 6,
        min_tx_fee: "8000",
        gas:120000,
        prefix:"akash"

    },
    "stargaze-1":{
        name:'stargaze',
        rpc:'https://rpc.stargaze-apis.com/',
        symbol:'STARS',
        denom: "ustars",
        exponent: 6,
        min_tx_fee: "800",
        gas:80000,
        prefix:"stars"

    },
    "chihuahua-1":{
        name:'chihuahua',
        rpc:'https://rpc.chihuahua.wtf/',
        symbol:'HUAHUA',
        denom: "uhuahua",
        exponent: 6,
        min_tx_fee: "5000",
        gas:80000,
        prefix:"chihuahua"

    },
    "columbus-5":{
        name:'terra-luna',
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
        rpc:'http://45.76.97.48:26657/',
        rest:'https://lcd-crescent-app.cosmostation.io/',
        symbol:'CRE',
        denom: "ucre",
        exponent: 6,
        min_tx_fee: "0",
        gas:80000,
        prefix:"cre"

    }
}