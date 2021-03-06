// Load environment variables from .env file if available
require('dotenv').load();
const jenkinsJob = process.env.JENKINS_JOB;

var config = {
    env:  'prod',

    host: process.env.MOZAIC_DASHBOARD_HOST || 'localhost',
    port: process.env.MOZIC_DASHBOARD_PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl:           process.env.JENKINS_API_BASE_URL,
            basicAuthUser:     process.env.JENKINS_API_BASIC_AUTH_USER,
            basicAuthPassword: process.env.JENKINS_API_BASIC_AUTH_PASSWORD
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        {
            // 4 x 2 dashboard
            columns: 4,
            rows:    2,
            widgets: [
              {
                type: 'jenkins.jobs',
                columns: 1, rows: 1,
                x: 0, y: 0
              },
              {
                type: 'jenkins.job_status',
                job: jenkinsJob,
                columns: 1, rows: 1,
                x: 1, y: 0
              },
              {
                type: 'jenkins.job_status',
                job: jenkinsJob,
                layout: 'bold',
                columns: 1, rows: 1,
                x: 2, y: 0
              },
              {
                type: 'jenkins.job_builds_histogram',
                job: jenkinsJob,
                columns: 1, rows: 1,
                x: 3, y: 0
              },
              {
                type: 'jenkins.view',
                view: 'all',
                columns: 2, rows: 1,
                x: 0, y: 1
              },
              {
                type: 'jenkins.job_builds',
                job: jenkinsJob,
                columns: 1, rows: 1,
                x: 2, y: 1
              },
              {
                type: 'github.user_badge',
                user: 'Dzvony',
                columns: 1, rows: 1,
                x: 3, y: 1
              }
            ]
        }
        // first dashboard
/*        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'github.user_badge',
                    user: 'Dzvony',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'Accenture/alexia-starter-kit',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'Accenture',
                    repository: 'alexia-starter-kit',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'Accenture',
                    repository: 'alexia-starter-kit',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'weather.weather',
                    city: 'Tokyo',
                    country: 'JP',
                    lang: 'en',
                    limit: 2,
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
                {
                    type: 'travis.build_history',
                    owner: 'Accenture',
                    repository: 'alexia-starter-kit',
                    columns: 1, rows: 2,
                    x: 3, y: 1
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'Accenture',
                    repository: 'alexia-starter-kit',
                    columns: 2, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'github.status',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                }
            ]
}

        // second dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'plouc',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        }*/
    ]
};

module.exports = config;
