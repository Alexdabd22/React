import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef } from 'react';
import './App.css';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    team: yup.string().required('Team is required'),
    favoriteTech: yup.string().required('Select your favorite tech'),
    otherTech: yup.string().when('favoriteTech', {
        is: 'Other',
        then: yup.string().required('Please specify your tech'),
    }),
    learnTech: yup.array().min(1, 'Select at least one technology'),
    otherLearnTech: yup.string().when('learnTech', {
        is: (learnTech) => learnTech?.includes('Other'),
        then: yup.string().required('Please specify your tech'),
    }),
    techLevels: yup.object().shape({
        JS: yup.string().required(),
        TS: yup.string().required(),
        React: yup.string().required(),
        Vue: yup.string().required(),
        Angular: yup.string().required(),
        NodeJS: yup.string().required(),
        GraphQL: yup.string().required(),
        Python: yup.string().required(),
        REST: yup.string().required(),
        Other: yup.string().required(),
        'React Native': yup.string().required(),
        Flutter: yup.string().required(),
    }),
    goals: yup.string().required('Please enter your goals'),
    visitFCC: yup.string().required('This field is required'),
    presales: yup.string().required('This field is required')
});

function SurveyForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // Використання useRef для уникнення зайвих ререндерів
    const selectedTechRef = useRef(watch('favoriteTech'));

    const selectedLearnTech = watch('learnTech');

    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="survey-form">
            {/* Name, Surname */}
            <div className="form-group">
                <label>Name, Surname *</label>
                <input {...register('name')} placeholder="Enter your name" />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* Team */}
            <div className="form-group">
                <label>Your team *</label>
                <input {...register('team')} placeholder="Enter your team" />
                {errors.team && <p className="error">{errors.team.message}</p>}
            </div>

            {/* Favorite Tech */}
            <div className="form-group">
                <label>My favorite tech (best) *</label>
                {['Vue', 'React', 'Angular', 'NodeJS', 'SAP Fiori', 'Other'].map((tech) => (
                    <div key={tech}>
                        <label>
                            <input
                                type="radio"
                                value={tech}
                                {...register('favoriteTech')}
                            />
                            {tech}
                        </label>
                    </div>
                ))}
                {errors.favoriteTech && <p className="error">{errors.favoriteTech.message}</p>}

                {/* Поле для введення власного варіанту, якщо вибрано "Other" */}
                {selectedTechRef.current === 'Other' && (
                    <div className="form-group">
                        <label>Please specify:</label>
                        <input type="text" {...register('otherTech')} placeholder="Enter your tech" />
                        {errors.otherTech && <p className="error">{errors.otherTech.message}</p>}
                    </div>
                )}
            </div>

            {/* I want to learn tech (JS) */}
            <div className="form-group">
                <label>I want to learn tech (JS) *</label>
                {['JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS', 'SAP Fiori', 'React Native', 'Flutter', 'Other'].map((tech) => (
                    <div key={tech}>
                        <label>
                            <input type="checkbox" value={tech} {...register('learnTech')} />
                            {tech}
                        </label>
                    </div>
                ))}
                {errors.learnTech && <p className="error">{errors.learnTech.message}</p>}
                {selectedLearnTech?.includes('Other') && (
                    <div className="form-group">
                        <label>Please specify:</label>
                        <input
                            type="text"
                            {...register('otherLearnTech')}
                            placeholder="Enter your tech"
                        />
                        {errors.otherLearnTech && <p className="error">{errors.otherLearnTech.message}</p>}
                    </div>
                )}
            </div>

            {/* My current level on tech */}
            <div className="form-group">
                <label>My current level on tech *</label>
                <table className="tech-level-table">
                    <thead>
                    <tr>
                        <th></th>
                        {['Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert'].map((level) => (
                            <th key={level}>{level}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {['JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS', 'GraphQL', 'Python', 'REST', 'Other', 'React Native', 'Flutter'].map((tech) => (
                        <tr key={tech}>
                            <td>{tech}</td>
                            {['Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert'].map((level) => (
                                <td key={`${tech}-${level}`}>
                                    <input type="radio" {...register(`techLevels.${tech}`)} value={level} />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {errors.techLevels && <p className="error">Please select a level for each technology</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default SurveyForm;
