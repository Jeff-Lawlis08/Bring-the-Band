import {expect} from 'chai';
import Backbone from 'backbone';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

let session;
beforeEach(()=>{
  Session.prototype.initialize = ()=>{

  };
  session = new Session();
});

describe('session model', ()=>{
  it('should be a function', ()=>{
    expect(Session).to.be.a('function');
  });
  it('should create a backbone model', ()=>{
    expect(session).to.be.an.instanceof(Backbone.Model);
  });
  it('should have an attribute id of objectId', () => {
    expect(session).to.have.property('idAttribute');
    expect(session.idAttribute).to.equal('objectId');
});
it('should have a default email value of an empty string', () => {
    expect(session.get('email')).to.equal('');
});
it('should have a default user-token value of an empty string', () => {
    expect(session.get('user-token')).to.equal('');
});
//methods
it('should have a register method', () => {
     expect(session).to.have.property('signup');
     expect(session.signup).to.be.a('function');
 });
 it('should have a login method', () => {
    expect(session).to.have.property('login');
    expect(session.login).to.be.a('function');
});
it('should have a logout method', () => {
     expect(session).to.have.property('logout');
     expect(session.logout).to.be.a('function');
 });
});
