import PropTypes from 'prop-types';

const ImprovementIdea = ({ register }) => (
    <div className="form-group">
        <label>My idea for improvement *</label>
        <textarea {...register('improveIdea')} placeholder="Enter your idea" />
    </div>
);

ImprovementIdea.propTypes = {
    register: PropTypes.func.isRequired,
};

export default ImprovementIdea;
