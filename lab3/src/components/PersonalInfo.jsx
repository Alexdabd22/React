import PropTypes from 'prop-types';

const PersonalInfo = ({ register, errors }) => (
    <div>
        <label>Name:</label>
        <input {...register('name')} placeholder="Enter your name" />
        {errors?.name && <p>{errors.name.message}</p>}

        <label>Team:</label>
        <input {...register('team')} placeholder="Enter your team" />
        {errors?.team && <p>{errors.team.message}</p>}
    </div>
);

PersonalInfo.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
};

export default PersonalInfo;
