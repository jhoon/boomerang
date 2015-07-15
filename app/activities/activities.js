angular.module('gdgXBoomerang')
.controller('ActivitiesController', function (Config, NavService) {
    var vm = this;
    vm.loading = false;
    NavService.setNavTab(3);
    vm.activities = [];

    var activityList = {
        devFests: {
            name: 'Dev Fest Lima',
            description: 'Dev Fest Lima es un evento a gran escala por la comunidad y para la comunidad . Los contenidos del evento giran en torno a tecnologías ' +
                'desarrolladas por Google',
            color: 'deepBlue',
            icon: '/app/images/icons/ic_event_48px.svg'
        },
        appClinics: {
            name: 'IO Extended Lima',
            description: 'El Google I/O Extended Lima es un evento donde los desarrolladores puedan compartir y debatir de una forma más amena lo presentado en el Google I/O',
            color: 'yellow',
            icon: '/app/images/icons/ic_local_hospital_48px.svg'
        },
        panels: {
            name: 'Study Jam Android',
            description: 'Grupo de estudio relacionado a tecnologías Android',
            color: 'lightPurple',
            icon: '/app/images/icons/ic_people_48px.svg'
        },

        techTalks: {
            name: 'Meetup',
            description: 'Conversatorio relacionados a tecnologías de Google',
            color: 'purple',
            icon: '/app/images/icons/ic_mic_48px.svg'
        },
        roundTables: {
            name: 'Coding Dojo',
            description: 'Un coding dojo es una reunión de programadores para practicar programación a través de ejercicios prácticos.',
            color: 'darkBlue',
            icon: '/app/images/icons/ic_local_pizza_48px.svg'
        },
        codeLabs: {
            name: 'GLabs',
            description: 'Talleres prácticos relacionados a tecnologías de Google',
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
