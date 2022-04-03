const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Pearl', async function () {
  it('Should create a Pearl', async function () {
    const Pearl = await ethers.getContractFactory('BlackPearl');
    const pearl = await Pearl.deploy('My pearl');
    await pearl.deployed();
    await pearl.createPearl('My first pearl', '150', '12345');

    const pearls = await pearl.fetchPearls();
    expect(pearls[0].tributee).to.equal('My first pearl');
  });
  it('Should create correct Pearl amount', async function () {
    const Pearl = await ethers.getContractFactory('BlackPearl');
    const pearl = await Pearl.deploy('My pearl');
    await pearl.deployed();
    await pearl.createPearl('My first pearl', '100', '12345');

    const pearls = await pearl.fetchPearls();
    expect(pearls[0].amount).to.equal('100');
  });

  it('Should edit a pearl', async function () {
    const Pearl = await ethers.getContractFactory('BlackPearl');
    const pearl = await Pearl.deploy('My pearl');
    await pearl.deployed();
    await pearl.createPearl('My Second pearl', '152', '12345');

    await pearl.updatePearl(1, 'My updated pearl', '170', '23456', true);

    pearls = await pearl.fetchPearls();
    expect(pearls[0].tributee).to.equal('My updated pearl');
  });

  it('Should add update the name', async function () {
    const Pearl = await ethers.getContractFactory('BlackPearl');
    const pearl = await Pearl.deploy('My pearl');
    await pearl.deployed();

    expect(await pearl.name()).to.equal('My pearl');
    await pearl.updateName('My new pearl');
    expect(await pearl.name()).to.equal('My new pearl');
  });
});
