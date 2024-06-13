const { wrapHandlers } = require('../utils');
const { BuildTaskType } = require('../models');
const buildTaskTypeSerializer = require('../serializers/build-task-type');

module.exports = wrapHandlers({
  list: async (req, res) => {
    const taskTypes = await BuildTaskType.findAll();
    const taskTypesJSON = buildTaskTypeSerializer.serializeMany(taskTypes);

    return res.json(taskTypesJSON);
  },
});
