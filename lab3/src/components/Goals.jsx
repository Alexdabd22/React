import PropTypes from 'prop-types';

const Goals = ({ register }) => (
    <>
        <div className="form-group">
            <label>#1 My goals on next time *</label>
            <p className="goal-description">
                Lets prepare 3 goals for your delivery future growth. You can check those goals in the next 3 months.
                Example: want to create a project with React, Redux, Saga, REST API in the next 3 months.
                Project should contain 10+ complex components, routing, and state management.
            </p>
            <textarea {...register('goal1')} placeholder="Enter your first goal" />
        </div>

        {/* Блоки для другої та третьої мети */}
        {['goal2', 'goal3'].map((goal, index) => (
            <div key={goal} className="form-group">
                <label>#{index + 2} My goals *</label>
                <textarea {...register(goal)} placeholder={`Enter your goal ${index + 2}`} />
            </div>
        ))}
    </>
);

Goals.propTypes = {
    register: PropTypes.func.isRequired,
};

export default Goals;
