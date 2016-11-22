import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VotedBands from '../../app/scripts/collections/votedBands';

describe('votedBands collection', () => {
    let votedBands;

    beforeEach(() => {
        votedBands = new VotedBands();
    });

    it('should create a Backbone Collection', () => {
        expect(votedBands).to.be.an.instanceof(Backbone.Collection);
    });

    it('should have a addVote method', () => {
      // expect(votedBands).to.have.property('addVote');
      expect(votedBands.addVote).to.be.a('function');
    });
});
