const { getInitialDataService } = require('../services/initialDataService')
const catchAsync = require('../utils/catchAsync')

const getInitialData = async (req, res) => {
	const data = await getInitialDataService()
	res.status(200).json(data)
}

module.exports = {
	getInitialData: catchAsync(getInitialData),
}
