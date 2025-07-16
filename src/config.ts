import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Chichua Token Exchange dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr17d8f0xjltkerpag0gwm0wvj0e8wcwjwpg5mhjgqahh3wt9zwvhls7wpl9x",
            cw20: "andr1fum9ysclu4lmc0eqkrg75pp767txs3m3ka9ennrqhdt2tc0hpfhqwhukqx",
            name: "Chichua Token Exchange dApp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
