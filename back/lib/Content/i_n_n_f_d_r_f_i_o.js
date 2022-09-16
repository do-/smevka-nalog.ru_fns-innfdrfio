const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_i_n_n_f_d_r_f_i_o:

    function () {

		return path.join (__dirname, '..', 'Static/fns-innfdrfio-root.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_i_n_n_f_d_r_f_i_o:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_i_n_n_f_d_r_f_i_o:

    function () {

    	const {rq: {data: {IDRequest}}} = this

		const k = [

			[7, 2, 4, 10, 3, 5, 9, 4, 6, 8],

			[3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8],

		]

    	let PhysicalPersonINN = '', s = [0, 0]
    	
    	for (let i = 0; i < 10; i ++) {
    	
    		const d = Math.floor (10 * Math.random ())
    	
			for (let j = 0; j < 2; j ++) s [j] += k [j] [i] * d
	
    		PhysicalPersonINN += String (d)
    	
    	}
    	
    	const d = s [0] % 11 % 10; s [1] += k [1] [10] * d; PhysicalPersonINN += String (d)
    	
    	PhysicalPersonINN += String (s [1] % 11 % 10)
    	    	
    	return {
    	
    		INNFDRFIOResponse: {IDRequest, PhysicalPersonINN},

    		_FSAttachmentsList: [
    			{uuid: '35c3561e-cd4f-4d38-ae7b-bcbd3f7047eb', FileName: '/35c3561e-cd4f-4d38-ae7b-bcbd3f7047eb.zip'},
    		],

    	}

    },
        
}