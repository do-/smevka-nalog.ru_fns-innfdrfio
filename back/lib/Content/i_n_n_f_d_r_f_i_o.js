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
    	
    	let PhysicalPersonINN = '520205004556'
    	
    	return {INNFDRFIOResponse: {IDRequest, PhysicalPersonINN}}

    },
        
}