import { processTest, populateTransaction } from "../../test.fixture";

const contractName = "LibertiV1ProxyLedger";

const testLabel = "depositKnown"; // <= Name of the test
const testDirSuffix = "deposit_known"; // <= directory to compare device snapshots to
const testNetwork = "polygon";
const signedPlugin = false;

const contractAddr = "0xb19d68cc120c5139bb83e3b8c11cb4d421eea98d";
const chainID = 137;

// From : https://polygonscan.com/tx/0x61b1cb5a286a0e68b4251eecbc0c080db8e6eafd8746ee196c406ab8184f0161
const inputData =
    "0xe9c670ad0000000000000000000000009c80a455ecaca7025a45f5fa3b85fd6a462a447b0000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f61900000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000002687c025200000000000000000000000000cfd674f8731e801a4a15c1ae31770960e1afded1000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001800000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f000000000000000000000000737da5f520b47cb15af413fdf93f036d83113a1c0000000000000000000000009c80a455ecaca7025a45f5fa3b85fd6a462a447b0000000000000000000000000000000000000000000000000000e5d44dbc1800000000000000000000000000000000000000000000000000000000000007569500000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bf00000000000000000000000000000000000000000000000000008100001a0020d6bdbf787ceb23fd6bc0add59e62ac25578270cff1b9f61900206ae40711b8000f4240737da5f520b47cb15af413fdf93f036d83113a1c1111111254fb6c44bac0bed2854e76f90643097d00000000000000000000000000000000000000000000000000000000000000017ceb23fd6bc0add59e62ac25578270cff1b9f6190000000000000000000000000000000000000000000000000000e5d44dbc180000cfee7c08000000000000000000000000000000000000000000000000";

const serializedTx = populateTransaction(contractAddr, inputData, chainID);

const devices = [
    {
        name: "nanos",
        label: "Nano S",
        steps: 5, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanox",
        label: "Nano X",
        steps: 5, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanosp",
        label: "Nano S+",
        steps: 5, // <= Define the number of steps for this test case and this device
    },
];

devices.forEach((device) => {
    processTest(
        device,
        contractName,
        testLabel,
        testDirSuffix,
        "",
        signedPlugin,
        serializedTx,
        testNetwork
    );
});
