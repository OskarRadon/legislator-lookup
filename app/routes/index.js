import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    var urlBills = 'http://congress.api.sunlightfoundation.com/bills?apikey=2a3b1ef2f9f5430fa83affc5c4322794';
    var urlCommittees = 'http://congress.api.sunlightfoundation.com/committees?apikey=2a3b1ef2f9f5430fa83affc5c4322794';

    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(urlBills).then(function(responseJSON){
        return responseJSON.results.slice(0, 5);
      }),

      committees: Ember.$.getJSON(urlCommittees).then(function(responseJSON){
        return responseJSON.results.slice(0, 5);
      })
    });
  },

  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
