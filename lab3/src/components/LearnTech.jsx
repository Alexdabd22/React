import PropTypes from 'prop-types';

const LearnTech = ({ register, watchValues, errors }) => {
    const selectedLearnTech = watchValues?.learnTech || [];

    return (
        <div>
            <label>I want to learn tech *</label>
            {['JS', 'TS', 'React', 'Vue', 'Other'].map((tech) => (
                <label key={tech}>
                    <input type="checkbox" value={tech} {...register('learnTech')} />
                    {tech}
                </label>
            ))}
            {selectedLearnTech.includes('Other') && (
                <input type="text" {...register('otherLearnTech')} placeholder="Specify your tech" />
            )}
            {errors?.learnTech && <p>{errors.learnTech.message}</p>}
        </div>
    );
};

LearnTech.propTypes = {
    register: PropTypes.func.isRequired,
    watchValues: PropTypes.object,
    errors: PropTypes.object,
};

export default LearnTech;
