import {expect} from 'chai';
import Backbone from 'backbone';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

let session;
beforeEach(()=>{
  session = new Session();
});

describe('session model', ()=>{
  it('should be a function', ()=>{
    expect(Session).to.be.a('function');
  });
  it('should create a backbone model', ()=>{
    expect(session).to.be.an.instanceof(Backbone.Model);
  });
});
