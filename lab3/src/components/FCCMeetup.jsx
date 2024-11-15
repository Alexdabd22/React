import PropTypes from 'prop-types';

const FCCMeetup = ({ register, errors }) => (
    <div className="form-group">
        <label>I want to speak on FCC meetup or other meetups *</label>
        <p className="goal-description">
            We want to check if we should come back internal FCC team meetups.
        </p>
        <div>
            <label><input type="radio" value="yes" {...register('fccMeetup')} /> Yes</label>
            <label><input type="radio" value="no" {...register('fccMeetup')} /> No</label>
        </div>
        {errors?.fccMeetup && <p className="error">{errors.fccMeetup.message}</p>}
    </div>
);

FCCMeetup.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

export default FCCMeetup;
