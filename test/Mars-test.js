const { expect } = require('chai');

describe('Mars Contract ERC20', async () => {
    let Mars, mars, MarsV2, marsv2, MarsV3, marsv3;
    beforeEach('Get Factory and Deploy', async () => {
        Mars = await ethers.getContractFactory('Mars');
        mars = await upgrades.deployProxy(Mars, {kind: 'uups'});
        console.log('mars address :- ', mars.address);
    });
    it('Should get token name', async () => {
        expect(await mars.name()).to.equal('Mars');
    });
    it('Should get token symbol', async () => {
        expect(await mars.symbol()).to.equal('MARS');
    });
    it('should Upgrade contract and return v2', async () => {
        MarsV2 = await ethers.getContractFactory('MarsV2');
        marsv2 = await upgrades.upgradeProxy(mars, MarsV2);
        console.log("marsV2 address :- ", marsv2.address);
        expect(await marsv2.version()).to.equal('v2!');
    });
    it('should Upgrade contract and return v3', async () => {
        MarsV3 = await ethers.getContractFactory('MarsV3');
        marsv3 = await upgrades.upgradeProxy(mars, MarsV3);
        console.log("marsV3 address :- ", marsv3.address);
        expect(await marsv3.version()).to.equal('v3!');
    });
});