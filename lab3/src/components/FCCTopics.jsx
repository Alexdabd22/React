import PropTypes from 'prop-types';

const FCCTopics = ({ register, watch, errors }) => {
    const selectedTopics = watch('fccTopics') || [];

    return (
        <div>
            <label>My topic in FCC *</label>
            <p className="goal-description">
                We want to check if we should come back internal FCC team meetups.
            </p>
            {['Global technology overview', 'Analytic topics', 'Tech battles', 'Other'].map((topic) => (
                <label key={topic}>
                    <input type="checkbox" value={topic} {...register('fccTopics')} />
                    {topic}
                </label>
            ))}
            {selectedTopics.includes('Other') && (
                <input type="text" {...register('otherFccTopic')} placeholder="Specify your topic"/>
            )}
            {errors?.fccTopics && <p>{errors.fccTopics.message}</p>}
        </div>
    );
};

FCCTopics.propTypes = {
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    errors: PropTypes.object,
};

export default FCCTopics;
