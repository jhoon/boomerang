angular.module('gdgXBoomerang')
.controller('ActivitiesController', function (Config, NavService) {
    var vm = this;
    vm.loading = false;
    NavService.setNavTab(3);
    vm.activities = [];

    var activityList = {
        devFests: {
            name: 'Dev Fest Lima',
            description: 'Dev Fest Lima es un evento a gran escala por la comunidad y para la comunidad . La temática  de los contenidos del evento gira, principalmente, entorno a tecnologias' +
                'desarrolladas por Google',
            color: 'deepBlue',
            icon: '/app/images/icons/ic_event_48px.svg'
        },
        appClinics: {
            name: 'IO Extended Lima',
            description: 'El Google I/O Extended Lima es un evento donde los desarrolladores puedan compartir y debatir de una forma más amena lo que se presentó en el Google I/O en Moscone Center',
            color: 'yellow',
            icon: '/app/images/icons/ic_local_hospital_48px.svg'
        },
        panels: {
            name: 'Study Jam Android',
            description: 'Grupo de estudio relacionado con tencologia android',
            color: 'lightPurple',
            icon: '/app/images/icons/ic_people_48px.svg'
        },

        techTalks: {
            name: 'Meetup',
            description: 'Conversatorio relacionados con tecnologia google ',
            color: 'purple',
            icon: '/app/images/icons/ic_mic_48px.svg'
        },
        roundTables: {
            name: 'Coding Dojo',
            description: 'Un coding dojo es una reunión de programadores que se juntan para practicar programación',
            color: 'darkBlue',
            icon: '/app/images/icons/ic_local_pizza_48px.svg'
        },
        codeLabs: {
            name: 'GLabs',
            description: 'Talleres prácticos relacionandos con tecnologia google',
            color: 'green',
            icon: '/app/images/icons/ic_code_48px.svg'
        }
        
    };

    if (Config.activities.techTalks) {
        vm.activities.push(activityList.techTalks);
    }
    if (Config.activities.roundTables) {
        vm.activities.push(activityList.roundTables);
    }
    if (Config.activities.codeLabs) {
        vm.activities.push(activityList.codeLabs);
    }
    if (Config.activities.devFests) {
        vm.activities.push(activityList.devFests);
    }
    if (Config.activities.appClinics) {
        vm.activities.push(activityList.appClinics);
    }
    if (Config.activities.panels) {
        vm.activities.push(activityList.panels);
    }
    
});
