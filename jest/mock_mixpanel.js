// mock Mixpanel or other third party services
var MixpanelPeople = (function(){
  function MixpanelPeople(){
    this.set = function(){
      console.log("mixpanel.people.set", arguments)
    }
    this.increment = function(){
      console.log("mixpanel.people.increment", arguments)
    }
  }
  return MixpanelPeople;
})();
var MixpanelMock = (function() {
  function MixpanelMock() {
    this.init = function() {
      console.log("mixpanel.init", arguments);
    }
    this.track = function() {
      console.log("mixpanel.track", arguments);
    }
    this.time_event = function(){
      console.log("mixpanel.time_event", arguments);
    }
    this.identify = function(){
      console.log("mixpanel.identify", arguments);
    }
    this.people = new MixpanelPeople(arguments);
  }
  return MixpanelMock;
})();
window.mixpanel = new MixpanelMock();