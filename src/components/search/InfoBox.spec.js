import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import InfoBox from '../search/InfoBox';

describe('<InfoBox />', () => {
  it('should have a span with the city, date, temperature, description, humidity and wind', () => {
    const wrapper = shallow(
      <InfoBox
        city = "London"
        date = "Feb 15"
        temperature = {1}
        description = "cloudy"
        humidity = {50}
        wind="12 km/h"
      />
    );
    
    const container = wrapper.find('div > div');
    const colOne = wrapper.find('.colOne > span');
    const colTwo = wrapper.find('.colTwo > span');
    const colThree = wrapper.find('.colThree > span');

    expect(container).to.have.length.of(3);
    expect(colOne).to.have.length.of(2);
    expect('London').to.equal(colOne.at(0).text());
    expect('Feb 15').to.equal(colOne.at(1).text());
    expect(colTwo).to.have.length.of(2);
    expect('1°C').to.equal(colTwo.at(0).text());
    expect('cloudy').to.equal(colTwo.at(1).text());
    expect(colThree).to.have.length.of(2);
    expect('humidity: 50%').to.equal(colThree.at(0).text());
    expect('wind: 12 km/h').to.equal(colThree.at(1).text());
  });
});
