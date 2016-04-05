import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    var key = config.myApiKey;
    var urlBills = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key;
    var urlCommittees = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key;

    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(urlBills).then(function(responseJSON){
        return responseJSON.results.slice(0, 5);
      }),

      committees: Ember.$.getJSON(urlCommittees).then(function(responseJSON){
        return responseJSON.results;
      })
    });
  },

  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
