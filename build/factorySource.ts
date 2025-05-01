const helloWorldAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"printHello","inputs":[],"outputs":[{"name":"value0","type":"string"}]},{"name":"constructor","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"}]} as const

export const factorySource = {
    HelloWorld: helloWorldAbi
} as const

export type FactorySource = typeof factorySource
export type HelloWorldAbi = typeof helloWorldAbi
