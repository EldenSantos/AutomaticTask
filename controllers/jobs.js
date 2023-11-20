
//automate a function/task with node-cron package

const cron = require('node-cron');
module.exports = (app) => ({

    init: function () {
        console.log('Start jobs');
        const jobs = Object.values(app.controllers.jobs);
        jobs.forEach((job, index) => { if (index > 0) { job() } });
    },

    onReady: function () {

    },

    jobVincularEstabelecimento: function() {
      cron.schedule('*/1 * * * *', () => {
        app.controllers.task.oneTask();
      });
    },

    jobTeste: function () {
        cron.schedule('*/2 * * * *', () => {
            now = new Date
            console.log('task running automatically! ' + now.getHours() + ":" + now.getMinutes());

        });
    },
});