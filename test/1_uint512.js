const randomBig = require('random-bigint')
const sqrtBig = require('bigint-isqrt');

const Uint512 = artifacts.require("Uint512");

const modulus = BigInt(2)**BigInt(256)
const max256 = modulus-BigInt(1);

const interations = 10_000;

contract("Uint512", accounts => {

    it("Mul512", async () => {
        let uint512 = await Uint512.deployed();
        for (let i = 0; i < interations; i++) {
            let rndA = randomBig(256);
            let rndB = randomBig(256);
            let res = await uint512.mul512.call(rndA, rndB);
            assert.equal(BigInt(res[0]) + (BigInt(res[1]) * modulus), rndA * rndB);
        }
    })

    it("Sqrt", async () => {
        let uint512 = await Uint512.deployed();
        for (let i = 0; i < interations; i++) {
            let rnd = randomBig(256);
            let res = await uint512.sqrt.call(rnd);
            assert.equal(res, sqrtBig(rnd));
        }
    })

    it("Sqrt512", async () => {
        let uint512 = await Uint512.deployed();
        for (let i = 0; i < interations; i++) {
            let rnd = randomBig(512);
            let res = await uint512.sqrt512.call(rnd % modulus, rnd / modulus);
            let sqrt = sqrtBig(rnd);
            assert.equal(res, sqrt);
        }
    })

    it("DivRem512", async () => {
        let uint512 = await Uint512.deployed();
        for (let i = 0; i < interations; i++) {
            let rndA = randomBig(256);
            let rndB = randomBig(256);
            let rndC = randomBig(256);
            let denom = rndB;
            let rem = rndC;
            while (rem >= denom) {
                rem = rem / 2n;
            }
            let nom = rndA * rndB + rem;
            let res = await uint512.divRem512.call(nom % modulus, nom / modulus, denom, rem);
            assert.equal(res, rndA);
        }
    })

    it("Div512", async () => {
        let uint512 = await Uint512.deployed();
        for (let i = 0; i < interations; i++) {
            let rndA = randomBig(256);
            let rndB = randomBig(256);
            let rndC = randomBig(256);
            let denom = rndB;
            let rem = rndC;
            while (rem >= denom) {
                rem = rem / 2n;
            }
            let nom = rndA * denom + rem;
            let res = await uint512.div512.call(nom % modulus, nom / modulus, denom);
            assert.equal(res, nom / denom);
        }
    })
});