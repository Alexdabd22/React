import PropTypes from 'prop-types';

const PreSales = ({ register, errors }) => (
    <div className="form-group">
        <label>I want to work on new PreSales. MVP, POC or new projects *</label>
        <p className="goal-description">
            For future planning we want to know if it is interested for you
        </p>
        <div>
            <label><input type="radio" value="yes" {...register('presales')} /> Yes</label>
            <label><input type="radio" value="no" {...register('presales')} /> No</label>
        </div>
        {errors?.presales && <p className="error">{errors.presales.message}</p>}
    </div>
);

PreSales.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

export default PreSales;
