Polymer({
  created: function() {
    this.fetchScripts(function() {
      var socket     = new WebSocket(this.wsURI);
      var share      = new sharejs.Connection(socket);
      var collection = this.getAttribute('collection');
      var docName    = this.getAttribute('document');
      var doc        = share.get(collection, docName);

      doc.subscribe();

      doc.whenReady(function() {
        if (!doc.type) {
          doc.create('text');
        }

        doc.attachTextarea(this.$.textarea);
      }.bind(this));
    }.bind(this));
  },

  get hostname() {
    if (this.getAttribute('host')) {
      return this.getAttribute('host');
    } else {
      return 'afternoon-gorge-3044.herokuapp.com';
    }
  },

  get isSSL() {
    if (this.hasAttribute('ssl')) {
      return this.getAttribute('ssl') !== 'false';
    } else {
      return true;
    }
  },

  get httpProtocol() {
    return this.isSSL ? 'https': 'http';
  },

  get wsProtocol() {
    return this.isSSL ? 'wss': 'ws';
  },

  get httpURI() {
    return this.httpProtocol + '://' + this.hostname;
  },

  get wsURI() {
    return this.wsProtocol + '://' + this.hostname;
  },

  fetchScripts: function(cb) {
    var complete = 0;
    var script = document.querySelector('script');

    var text = document.createElement('script');
    text.src = this.httpURI + '/text.js';
    this.insertBefore(text);
    text.onload = function() {
      var share = document.createElement('script');
      share.src = this.httpURI + '/share.js';
      this.insertBefore(share);
      share.onload = cb;
    }.bind(this);
  }
});
