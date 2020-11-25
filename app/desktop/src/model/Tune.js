Ext.define('ModernTunes.model.Tune', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.JsonP'],
    fields: [{
        name: 'id',
        mapping: 'id.attributes["im:id"]'
    }, {
        name: 'title',
        mapping: '["im:name"].label'
    }, {
        name: 'image',
        mapping: '["im:image"][2].label'
    }, {
        name: 'artist',
        mapping: '["im:artist"].label'
    }, {
        name: 'itunesstore',
        mapping: 'link[0].attributes.href'
    }, {
        name: 'preview',
        mapping: 'link[1].attributes.href'
    }, {
        name: 'release_date',
        mapping: '["im:releaseDate"].attributes.label'
    }],
    proxy: {
        type: 'jsonp',
        url: 'https://itunes.apple.com/us/rss/topmusicvideos/limit=50/json',
        reader: {
            type: 'json',
            rootProperty: 'feed.entry'
        }
    }
});