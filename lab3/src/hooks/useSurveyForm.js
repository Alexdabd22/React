import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

const useSurveyForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    return { register, handleSubmit, watch, errors, reset };
};


export default useSurveyForm;
