angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Lima',
        'id'            : '110122706499918118028',
        'googleApi'     : 'AIzaSyD9OQXaZFCywc8tZXLekxDQh4ke9MEyXA8',
        'pwaId'         : '6160961920179959393', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdglima.com',
        'twitter'       : 'gdglima',
        'facebook'      : 'gdglima',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, y MMMM d - h:mm a',
        'cover' : {
            title: 'Eventos GDG Lima',
            subtitle: 'Directorio de Eventos organizados por el GDG Lima.',
            button: {
                text: 'Encuentra eventos locales',
                url: 'http://gdglima.com/#!/events'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
