export const chainMap = {
    "cosmoshub-4": {
        name: 'Cosmos',
        rpc: 'https://rpc.cosmos.directory/cosmoshub',
        rest: 'https://rest.cosmos.directory/cosmoshub',
        symbol: 'ATOM',
        denom: "uatom",
        exponent: 6,
        min_tx_fee: "800",
        gas: 80000,
        prefix: "cosmos"
    },
    "osmosis-1": {
        name: 'Osmosis',
        rpc: 'https://rpc.cosmos.directory/osmosis',
        rest: 'https://rest.cosmos.directory/osmosis',
        symbol: 'OSMO',
        denom: "uosmo",
        exponent: 6,
        min_tx_fee: "800",
        gas: 140000,
        prefix: "osmo"
    },
    "juno-1": {
        name: 'Juno',
        rpc: 'https://rpc.cosmos.directory/juno',
        rest: 'https://rest.cosmos.directory/juno',
        symbol: 'JUNO',
        denom: "ujuno",
        exponent: 6,
        min_tx_fee: "3000",
        gas: 80000,
        prefix: "juno"
    },
    "akashnet-2": {
        name: 'Akash Network',
        rpc: 'https://rpc.cosmos.directory/akash',
        rest: 'https://rest.cosmos.directory/akash',
        symbol: 'AKT',
        denom: "uakt",
        exponent: 6,
        min_tx_fee: "8000",
        gas: 120000,
        prefix: "akash"

    },
    "stargaze-1": {
        name: 'Stargaze',
        rpc: 'https://rpc.cosmos.directory/stargaze',
        rest: 'https://rest.cosmos.directory/stargaze',
                symbol: 'STARS',
        denom: "ustars",
        exponent: 6,
        min_tx_fee: "800",
        gas: 80000,
        prefix: "stars"

    },
    "chihuahua-1": {
        name: 'Chihuahua',
        chain_status: 'experiemental',
        rpc: 'https://rpc.cosmos.directory/chihuahua',
        rest: 'https://rest.cosmos.directory/chihuahua',
        symbol: 'HUAHUA',
        denom: "uhuahua",
        exponent: 6,
        min_tx_fee: "2000",
        gas: 80000,
        prefix: "chihuahua",
        coin_type: 118
    },
    "crescent-1": {
        name: 'Crescent',
        chain_status: 'experiemental',
        rpc: 'https://rpc.cosmos.directory/crescent',
        rest: 'https://rest.cosmos.directory/crescent',
        symbol: 'CRE',
        denom: "ucre",
        exponent: 6,
        min_tx_fee: "0",
        gas: 80000,
        prefix: "cre",
        coin_type: 118

    },
    "evmos_9001-2": {
        chain_id: 'evmos_9001-2',
        name: 'Evmos',
        value: "evmos",
        rpc: 'https://rpc.cosmos.directory/evmos',
        rest: 'https://rest.cosmos.directory/evmos',
        hd_path: "m/44'/60'/0'/0/0",
        symbol: 'EVMOS',
        denom: "aevmos",
        exponent: 18,
        min_tx_fee: ["4000000000000000", "4000000000000000"],
        gas: 200000,
        prefix: "evmos"
    },
}