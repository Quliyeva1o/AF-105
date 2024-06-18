import * as Yup from 'yup';

const CountrySchema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Z]{5,}$/, 'name regex invalid').required('name is required'),
    capital: Yup.string().required('capital is required'),
    flagImg: Yup.string().url('invalid url').required('url is required'),
    population: Yup.number().positive().min(1000,'minimum population should be 1000').required('population is required'),
    description: Yup.string().min(30,'description should be at least 30 chars').required('description is required'),
})

export default CountrySchema