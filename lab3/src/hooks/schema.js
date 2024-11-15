import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    team: yup.string().required('Team is required'),
    favoriteTech: yup.string().required('Select your favorite tech'),
    learnTech: yup.array().min(1, 'Select at least one technology'),
    interests: yup.array().min(1, 'Select at least one interest'),
    goal1: yup.string().required('Please enter your first goal'),
    presales: yup.string().required('This field is required'),
    improveIdea: yup.string().required('Please enter your idea for improvement')
});


export default schema;
