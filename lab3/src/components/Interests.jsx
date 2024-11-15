import PropTypes from 'prop-types';

const Interests = ({ register, watch, errors }) => {
    const selectedInterests = watch('interests') || [];

    return (
        <div>
            <label>I’m interested in *</label>
            {['Develop presentations', 'DX8', 'Complex apps', 'Hybrid apps', 'Other'].map((interest) => (
                <label key={interest}>
                    <input type="checkbox" value={interest} {...register('interests')} />
                    {interest}
                </label>
            ))}
            {selectedInterests.includes('Other') && (
                <input type="text" {...register('otherInterest')} placeholder="Specify your interest" />
            )}
            {errors?.interests && <p>{errors.interests.message}</p>}
        </div>
    );
};

Interests.propTypes = {
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    errors: PropTypes.object,
};

export default Interests;
